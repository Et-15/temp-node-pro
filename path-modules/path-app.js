const path = require('path')
//sepator depending on differnet device
console.log(path.sep)

// current working directory. which is threaltive path.
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

// the full file path, which is the active file directory.
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')

console.log(absolute)