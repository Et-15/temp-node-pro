const http = require('http');

let users = {}; 
let idCounter = 1;

const server = http.createServer((req, res) => {
  const urlParts = req.url.split('/').filter(Boolean); // split and remove empty parts
  const method = req.method;

  
  if (method === 'GET' && req.url === '/users') {
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify(users));
  }

  
  if (method === 'POST' && req.url === '/users') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const username = body.split('=')[1]; 
      const id = idCounter++;
      users[id] = { id, name: username };
      res.end(`User created: ${JSON.stringify(users[id])}`);
    });
    return;
  }

  
  if (method === 'PUT' && urlParts[0] === 'users' && urlParts[1]) {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const id = urlParts[1];
      users[id] = { id, name: body.split('=')[1] }; // replace entirely
      res.end(`User replaced: ${JSON.stringify(users[id])}`);
    });
    return;
  }

  if (method === 'PATCH' && urlParts[0] === 'users' && urlParts[1]) {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const id = urlParts[1];
      if (!users[id]) return res.end('User not found');
      users[id].name = body.split('=')[1]; // partial update
      res.end(`User updated: ${JSON.stringify(users[id])}`);
    });
    return;
  }

  
  if (method === 'DELETE' && urlParts[0] === 'users' && urlParts[1]) {
    const id = urlParts[1];
    if (!users[id]) return res.end('User not found');
    delete users[id];
    return res.end(`User ${id} deleted`);
  }
  
  if (req.url === '/favicon.ico') {
    res.statusCode = 204; // No Content
    return res.end();
  }

  
  res.statusCode = 404;
  res.end('Route not found');
});

server.listen(5000, () => console.log('Server running on port 5000'));
