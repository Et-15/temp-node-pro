const http = require('http');

const server = http.createServer((req, res) =>{
  if (req.url === '/') {
    res.end('Here is our home page')
  }
  else if (req.url === '/about') {
    res.end('Here is our short story')
  }
  else {
    res.end(`
      <h1>Oops!</h1>
      <p>seems we can't find the page you're looking for</p>
      <a href="/">Back home</a>
      `)

      
      res.setHeader('Content-Type', 'application/json');
      
      res.end(JSON.stringify({ msg: 'Hello' }));

      console.log(req.method, req.url);
  }
  
    
});

server.listen(5000);
//console.log(req.method, req.url);

