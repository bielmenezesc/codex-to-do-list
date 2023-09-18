const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, 'src', req.url === '/' ? 'index.html' : req.url);
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
  };

  const contentTypeHeader = contentType[extname] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404);
        res.end('404 - Not Found');
      } else {
        res.writeHead(500);
        res.end('500 - Internal Server Error');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentTypeHeader });
      res.end(content, 'utf-8');
    }
  });
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Servidor Node.js rodando em http://localhost:${port}/`);
});
