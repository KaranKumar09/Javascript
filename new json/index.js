// const http =require('http');
// const server=http.createServer((req,res)=> {
    //     res.end("hello, this is your Node.js server!");
    // });
    // const port=4000;
    // server.listen(port,()=> console.log(`Server is running on http://localhost:${port}`));
    
    
// Reading a file asynchronous

// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((req, res) => {
//     if (req.url == "/") {
//         fs.readFile('FileSystem/example.txt', 'utf8', (err, data) => {
//             if (err) {
//                 console.error(err);
//                 return;
//             }
//             res.writeHead(200, { 'Content-Type': 'text/plain' });
//             res.end('file content:' + data);
//         })
//     }
// });
// const port = 4000;
// server.listen(port, () => console.log(`Server is running on http://localhost:${port}`));

//write to a file asynchronous
// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((req, res) => {
//     if (req.url == "/") {
//         const message='Hello, this is your Node.js server!';
//         fs.writeFile('FileSystem/output.txt',message, 'utf8', (err) => {
//             if (err) {
//                 console.error(err);
//                 res.writeHead(500, { 'Content-Type': 'text/plain' });
//                 res.end('Internal server Error');
//                 return;
//             }
//             res.writeHead(200, { 'Content-Type': 'text/plain' });
//             res.end('File content: '+ message);
//         });
//     }
// });
// const port = 4000;
// server.listen(port, () => console.log(`Server is running on http://localhost:${port}`));

//Reading a file Synchronously


// // writing a file Synchronously
// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((req, res) => {
//     if (req.url == "/") {
//         const message='Hello, this is your Node.js server!';
//             try {
//                 fs.writeFileSync('FileSystem/output.txt',message, 'utf-8');
//                 res.writeHead(200, { 'Content-Type': 'text/plain' });
//                 res.end('File content: '+ message);
//                 return;
//             }catch(err){
//                 console.error(err);
//                 res.writeHead(500, { 'Content-Type': 'text/plain' });
//                 res.end('Internal server Error');

//             }
//     }
// });
// const port = 4000;
// server.listen(port, () => console.log(`Server is running on http://localhost:${port}`));


//appending file in Asynchronous manner
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {

    if(req.url === "/") {
        const message = 'Hello, this file is appended using callback: ';
        fs.appendFile('FileSystem/output.txt', message + '\n', 'utf-8',(err) => {
            if(err){
                console.error(err);
                 res.writeHead(500, {'Content-Type':'text/plain'});
                res.end("Internal server error");
            }
            else{
                res.writeHead(200, {'Content-Type' : 'text/plain'});
                res.end('File Content Appended: ' + message);
            }
        })
    }
})

const port = 4000;

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});