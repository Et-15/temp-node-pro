const data = require('./otherModule')
require('./addNums') // lets see that how this is importing the details of addNUMS.js while the addNums is not exporting, is that due the node's behaviour of modules?
const {items, specialPerson} = require('./otherModule')

console.log(items[0])
console.log(specialPerson.name)