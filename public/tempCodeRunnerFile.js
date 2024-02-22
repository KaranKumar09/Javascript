const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//   if (req.method === 'GET' && req.url === '/write') {
//     fs.writeFileSync('example.txt', 'Content to write to file');
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('File written successfully');
//   } else {
//     res.writeHead(404, {'Content-Type': 'text/plain'});
//     res.end('404 Not Found');
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(Server running on port ${PORT});
// });