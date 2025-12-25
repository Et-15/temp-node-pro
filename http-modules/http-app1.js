const http = require('http')

const server = http.createServer((req, res) => {
  console.log(`Recived ${req.method}, request for ${req.url}`)

  if (req.method === 'GET' && req.url === '/') {
    res.setHeader('Content-Type', 'text/html')
    res.end(`
      <h1>Submit Your Name</h1>
      <form method="POST" action="/submit">
        <input type="text" name="name" placeholder="Your Name" />
        <button type="submit">Send</button>
      </form>
   `)
  } else if(req.method === 'POST' && req.url === '/submit') {
      let body = ''

      req.on('data', (chunks) => {
        //console the chunk
        console.log('chunk recived:', chunks.toString())
        body += chunks.toString();
      })

      req.on('end', () => {
        //console full body
        console.log('Body: ', body)
        res.setHeader('content-Type', 'text/html')
        res.end(`<h1>Hello, ${body.split('=')[1]}</h1>`);
      })
    } else {
      res.statusCode = 404
      res.setHeader('content-type', 'text/html')
      res.end(`
        <h1>Oops!</h1>
        <p>Page not found</p>
        <a href="/">back to home</a>
        `)
      }
})

server.listen(5000, () => {
  console.log('Server running on local host http://localhost:5000')
})