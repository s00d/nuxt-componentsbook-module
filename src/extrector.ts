import { readFileSync } from 'node:fs'
import type { SFCDescriptor } from '@vue/compiler-sfc'
import { parse as vueParse, compileScript } from '@vue/compiler-sfc'
import { parse } from 'acorn'
import { walk } from 'estree-walker'
import type { Node } from 'estree-walker'
import type { ObjectExpression, Property, Identifier } from 'estree'

export interface PropData {
  name: string
  type: string
  defaultValue?: string
  required: boolean
  validator?: string
}

export function generatePropsTable(props: PropData[]): string {
  let table = `
    <h2>🔹 Props</h2>
    <table>
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Required</th>
          <th>Default Value</th>
          <th>Validator</th>
        </tr>
      </thead>
      <tbody>
  `

  props.forEach((prop) => {
    table += `
      <tr>
        <td><code>${prop.name}</code></td>
        <td>${prop.type ?? 'N/A'}</td>
        <td>${prop.required ? '✅ Yes' : '❌ No'}</td>
        <td>${prop.defaultValue ?? 'N/A'}</td>
        <td>${prop.validator ?? 'None'}</td>
      </tr>
    `
  })

  table += '</tbody></table>'
  return table
}

export async function extractComponentData(componentPath: string): Promise<PropData[]> {
  try {
    const fileContent = readFileSync(componentPath, 'utf-8')

    // Разбираем SFC
    const { descriptor }: { descriptor: SFCDescriptor } = vueParse(fileContent, { filename: componentPath })

    let scriptContent = ''
    if (descriptor.scriptSetup) {
      scriptContent = compileScript(descriptor, { id: 'componentsbook' }).content
    }
    else if (descriptor.script) {
      scriptContent = descriptor.script.content
    }
    else {
      return []
    }

    // Парсим AST через Acorn
    const ast = parse(scriptContent, { ecmaVersion: 'latest', sourceType: 'module' }) as Node

    const propsData: PropData[] = []

    walk(ast, {
      enter(node: Node) {
        // Общая проверка export default
        if (node.type === 'ExportDefaultDeclaration') {
          // Проверяем: возможно node.declaration — это объект
          if (node.declaration.type === 'ObjectExpression') {
            const propsNode = findPropsNode(node.declaration)
            if (propsNode) {
              extractPropsFromObject(propsNode as ObjectExpression, propsData)
            }
          }
          // Или node.declaration — это вызов функции _defineComponent({...})
          else if (node.declaration.type === 'CallExpression') {
            const callee = node.declaration.callee
            const args = node.declaration.arguments

            // Если это действительно defineComponent(...)
            if (
              (callee.type === 'Identifier' && callee.name.endsWith('defineComponent'))
              || (callee.type === 'MemberExpression'
                && callee.property.type === 'Identifier'
                && callee.property.name === 'defineComponent')
            ) {
              // Смотрим на первый аргумент
              const componentOptions = args[0]
              if (componentOptions?.type === 'ObjectExpression') {
                const propsNode = findPropsNode(componentOptions)
                if (propsNode) {
                  extractPropsFromObject(propsNode as ObjectExpression, propsData)
                }
              }
            }
          }
        }
      },
    })

    return propsData
  }
  catch {
    return []
  }
}

function findPropsNode(objExpr: ObjectExpression): Property['value'] | undefined {
  return (objExpr.properties.find(
    (prop: Node) =>
      prop.type === 'Property'
      && prop.key.type === 'Identifier'
      && prop.key.name === 'props'
      && prop.value.type === 'ObjectExpression',
  ) as Property)?.value
}

/**
 * Извлекает пропсы из ObjectExpression и добавляет их в массив
 */
function extractPropsFromObject(objectExpr: ObjectExpression, propsData: PropData[]) {
  objectExpr.properties.forEach((prop) => {
    if (prop.type === 'Property' && prop.key.type === 'Identifier') {
      const key = prop.key as Identifier

      const properties = prop.value as ObjectExpression

      const typeNode = properties?.properties?.find(
        p => p.type === 'Property' && p.key.type === 'Identifier' && (p.key as Identifier).name === 'type',
      )

      const defaultNode = properties?.properties?.find(
        p => p.type === 'Property' && p.key.type === 'Identifier' && (p.key as Identifier).name === 'default',
      )

      const validatorNode = properties?.properties?.find(
        p => p.type === 'Property' && p.key.type === 'Identifier' && (p.key as Identifier).name === 'validator',
      )

      propsData.push({
        name: key.name,
        type: extractType(typeNode as Property),
        defaultValue: extractDefault(defaultNode as Property),
        required:
          properties?.properties?.some(
            p => p.type === 'Property' && p.key.type === 'Identifier' && (p.key as Identifier).name === 'required',
          ) || false,
        validator: extractValidator(validatorNode as Property),
      })
    }
  })
}

/**
 * Извлекает тип пропса из AST-узла
 */
function extractType(typeNode?: Property): string {
  if (!typeNode || !typeNode.value) return 'unknown'

  if (typeNode.value.type === 'Identifier') {
    return typeNode.value.name
  }
  else if (typeNode.value.type === 'Literal') {
    return String(typeNode.value.value)
  }

  return 'unknown'
}

/**
 * Извлекает значение по умолчанию
 */
function extractDefault(defaultNode?: Property): string {
  if (!defaultNode || !defaultNode.value) return 'undefined'

  if (defaultNode.value.type === 'Literal') {
    return String(defaultNode.value.value)
  }
  else if (defaultNode.value.type === 'ArrowFunctionExpression') {
    return '[Function]'
  }

  return 'unknown'
}

/**
 * Извлекает валидатор
 */
function extractValidator(validatorNode?: Property): string {
  if (!validatorNode || !validatorNode.value) return 'none'

  if (validatorNode.value.type === 'ArrowFunctionExpression' || validatorNode.value.type === 'FunctionExpression') {
    return '[Function]'
  }

  return 'unknown'
}
