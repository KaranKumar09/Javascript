// design a Node.js server using the http and fs modules to efficiently read the constants of a file ('example.txt') and 
// and stream it to another file ('example.txt') when a clinet access the server's root url(/).
// import fs from 'fs';
// import http from 'http';
const http=require('http');
const fs=require("fs");

const server = http.createServer((req,res)=>{
    let message="";
    if(req.url=='/'){
       
        const readableStream=fs.createReadStream('example.txt',{encoding : 'utf-8' , highWaterMark: 100});
        
        const writableStream=fs.createWriteStream('example2.txt');
        
        readableStream.on('data',(chunk) => {
            
            message+=chunk;
            writableStream.write(chunk);
        });
        readableStream.on('end',()=>{
            writableStream.end();
            res.end("FIle Content"+message);
        })
    }
})
const port = 4000;

server.listen(port,() => console.log(`server is running on http://localhost:${port}`));


//using pipe mathod
const http=require('http');
const fs=require('fs');
http.createServer((req,res)=> {
  if(req.url=='/'){
    readStream=fs.createReadStream('example.txt',{highWaterMark:8});
    riteStream=fs.createWriteStream('example2,txt');
    readStream.pipe(writeStream);
    res.end('Done');
    }
}).listen(4000);