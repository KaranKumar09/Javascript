// // const http=require('http');
// // const fs=require('fs');
// // const server=http.createServer((req,res)=>{
// //     if(req=="/readfile"){
// //         fs.readFile('public/example.txt','utf8',(err,data)=>{
// //             if(err){
// //                 res.writeHead(500, {'Content-Type' : 'text/plain'});
// //                 res.end('intenal server error');
// //             }
// //             else{
// //                 res.writeHead(200,{'Content-Type ' : 'text/plain ' });
// //                 res.end(data);
// //             }
// //         });
// //     }else{
// //         res.writeHead(404 ,{"Content-Type" : "text/plain"} );
// //         res.end('404 not found');
// //     }
// // });
// // const port=4000;
// // server.listen(port,()=>{
// //     console.log(`server is running on port: ${port}`);
// // });
// const http=require('http');
// const fs=require('fs');
// const server=http.createServer((req,res)=>{
//     if(req==='GET' && req=="/writefile"){
//         fs.writeFileSync('example.txt','content to written in file');
//         res.writeHead(200,{'Content-Type':'text/plain'});
//         res.end('written successfully');
//     }else{
//         res.writeHead(404,{'Content-Type':'text/plain'});
//         res.end('404 not found');
//     }
// });
// const port=4000;
// server.listen(port,()=>{
//     console.log(`server is  listening at port ${port}`);
// });
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//   if (req.url === '/readfile') {
//     // Read the content of example.txt synchronously
//     try {
//       const content = fs.readFileSync('example.txt', 'utf8');
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       res.end(content);
//     } catch (err) {
//       res.writeHead(500, { 'Content-Type': 'text/plain' });
//       res.end('Internal Server Error');
//     }
//   } else {
//     // Respond with 404 for any other endpoint
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('404 Not Found');
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(Server is running on port ${PORT});
// });
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//   if (req.method === 'GET' && req.url === '/writefile') {
//     // Example content to write to the file
//     const content = 'This is the content written to example.txt\n';

//     // Asynchronously write content to example.txt
//     fs.writeFile('example.txt', content, (err) => {
//       if (err) {
//         res.writeHead(500, { 'Content-Type': 'text/plain' });
//         res.end('Error writing file');
//       } else {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('File written successfully');
//       }
//     });
//   } else {
//     // Respond with 404 for any other endpoint
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('404 Not Found');
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(Server is running on port ${PORT});
// });l