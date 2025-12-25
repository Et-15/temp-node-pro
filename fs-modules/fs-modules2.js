

const {readFile, writeFile} = require('fs/promises')
/*
async function conmbinedFile() {
  try {
    const first = await readFile('../content/first.txt', 'utf8')
    const second = await readFile('../content/second.txt', 'utf8')

    await writeFile('../content/result-async.txt', 
      `Here is the result ${first}, ${second}`
    )

    console.log('File written succesfully.')

  } catch(err) {
      console.log(err)
    }

}

conmbinedFile()
*/


/*
// the promise verion of our code.
readFile('../content/first.txt', 'utf8')
  .then(first => {
    return readFile('../content/second.txt', 'utf8')
      .then(second => ({ first, second }));
  })
  .then(({ first, second }) => {
    return writeFile(
      '../content/result-async.txt',
      `Here is the result ${first}, ${second}`, {flag: 'a'}
    );
  })
  .catch(err => {
    console.log(err)
  });
  */

   //with in promise.ALL
async function combinedFilesParallel() {
  try {
    const [first, second] = Promise.all([
      readFile('../content/first.txt', 'utf8'),
      readFile('../content/second.txt', 'utf8')
    ])

    await writeFile('../content/result-async.txt', 
      `Here is the result ${first}, ${second}`
    )
    console.log('File written sueccessfully in parallel')
  } catch (err) {
    console.log(err)
  }
}

combinedFilesParallel();


/*
using call back, which is more nested and callback helled
readFile('../content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result;
  readFile('../content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result;
    writeFile('../content/result-async.txt', 
      `Here is the result with a call back: ${first}, ${second}`,
      (err) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('File wrritten successfully')
      }
      
    )
  })
})
console.log('Loading...')
*/