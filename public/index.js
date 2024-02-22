// const http=require('http');
// const fs=require('fs');

// const server=http.createServer((req,res)=>{
//     if(req.url==="/"){
//         fs.readFile('public/form.html','utf8',(err,data)=>{
//             if(err){
//                 console.error(err);
//                 res.end("There is some errorrr");
//             }
//             res.end(data);
//         })
//     }else if(req.url=='save-json'&& req.method=="post"){
//         let body="";
//         req.on('data',(chunk)=>)
//     }
// })
const http=require('http');
const fs=require('fs');
const path=require('path');
const querystring=require('querystring');
const server=http.createServer((req,res)=>{
    if(req.url=="/")
    {
        fs.readFile("./index.html","utf-8",(err,data)=>{
            if(err)
            {
                console.error(err);
                res.end('their is an error');
                return;
            }
        
            res.end(data);
        })
    }else if(req.url=="data-json" && req.method=="POST")
    {
        let body='';
        req.on('data',chunk=>{
            body+=chunk.toString();
        });
        req.on('end',()=>{
            console.log(body);
            const parsed= querystring.parse(body);
            console.log(parsed);
            res.end(JSON.stringify(parsed));
        });
    }
    

    
 });
 const port=4000;
 server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
 });