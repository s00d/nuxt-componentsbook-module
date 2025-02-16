const fs = require('node:fs')
const path = require('node:path')

function collectFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      collectFiles(filePath, fileList)
    }
    else {
      fileList.push(filePath)
    }
  })

  return fileList
}

function mergeFilesToMarkdown(folderPath, outputFilePath) {
  if (!fs.existsSync(folderPath)) {
    console.error('Ошибка: указанная папка не существует.')
    process.exit(1)
  }

  const files = collectFiles(folderPath)
  let markdownContent = ''

  files.forEach((file) => {
    try {
      const content = fs.readFileSync(file, 'utf-8')
      markdownContent += `### ${path.relative(folderPath, file)}\n\n`
      markdownContent += `${content}\n\n---\n\n`
    }
    catch (err) {
      console.error(`Ошибка чтения файла: ${file}`, err)
    }
  })

  fs.writeFileSync(outputFilePath, markdownContent, 'utf-8')
  console.log(`Файл успешно создан: ${outputFilePath}`)
}

const args = process.argv.slice(2)
if (args.length < 2) {
  console.error('Использование: node mergeFilesToMd.js <папка> <выходной_файл.md>')
  process.exit(1)
}

const folderPath = args[0]
const outputFilePath = args[1]
mergeFilesToMarkdown(folderPath, outputFilePath)
