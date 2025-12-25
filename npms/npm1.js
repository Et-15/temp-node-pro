// npm --version

// local dependecy - use it only in this particular project
// npm i <packageName>


// global dependency - use it in any project
// npm install -g <packagName>
// sudo npm install -g <packageName> (mac)

// package.json - mainfest file (stores imoprtant info about project /package)
// manual apporach (create package.json in the root, create properties etc) 
// npm init( step by step, press enter to skip)
// npm intit -y (everything default)

const _ = require('lodash')

const item = [1, [2, [3, [4]]]]
const newItem = _.flattenDeep(item)
console.log(newItem)