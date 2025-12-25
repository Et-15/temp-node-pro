const amount = 9;

if (amount < 10) {
  console.log('smaller number')
} else {
  console.log('larger number')
}

console.log('this is my fisrt node app');
const name = 'Yakob';

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(name)
  }, 5000)
})

console.log("what's you're name, let me guess?");

promise.then(() => {
  console.log('Hello', name)
})



