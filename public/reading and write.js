const http =require ('http');
const fs = require('fs');
const querystring = require('querystring');

http.createServer((req,res) => {
    if(req.url == "/"){
        fs.readFile('public/form.html',"utf8",(err,data) =>{
            if(err){
                console.error(err);
                res.end("Hey you are having a error,  check console");
            }
            else{
                res.end(data);
            }
        });
    }
    else if(req.url==="/save-json"){
        let body = "";
        req.on('data',(chunk) => {
            body += chunk;
        });
        req.on('end',() => {
            const jsondata = querystring.parse(body).jsonData;
            const jsonString = JSON.stringify(jsondata);
            fs.writeFile('public/new.json',jsonString,(err) => {
                if(err){
                    console.error(err);
                    res.end()
                }else {
                    res.end("operation was successfull");
                }
            })
        });
    }
}).listen(4000);