// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req, res) => {
//   if (req.url === '/readfile') {
//     const filePath = path.join(__dirname, 'example.txt');
//     fs.readFile(filePath, 'utf8', (err, data) => {
//       if (err) {
//         res.writeHead(500, {'Content-Type': 'text/plain'});
//         res.end('Internal Server Error');
//       } else {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end(data);
//       }
//     });
//   } else {
//     res.writeHead(404, {'Content-Type': 'text/plain'});
//     res.end('404 Not Found');
//   }
// });

// const PORT = process.env.PORT || 4000;
// server.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/write') {
    fs.writeFileSync('example.txt', 'Content to write to file');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('File written successfully');
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not Found');
  }
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});