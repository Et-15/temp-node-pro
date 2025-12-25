const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('../content/first.txt', 'utf8')
const second = readFileSync('../content/second.txt', 'utf8')

console.log(first, second);

//without the flag {flag: a} the file will be overwirtten by the newly add file, but using th append the the file will be apended to the last
writeFileSync('../content/result-sync.txt', 
  `Here is the newly appended result: ${first}, ${second}`, {flag: 'a'}
)


