const os = require('os')

//info abour current  user
const user = os.userInfo();
console.log(user);

//method return the system uptime in seconds 
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOs =  {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}
console.log(currentOs)

// cpu realted info
const cpu = os.cpus()
console.log(cpu)