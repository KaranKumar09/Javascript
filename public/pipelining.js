const fs = require('fs');

const readableStream = fs.createReadStream('example.txt','utf-8');

const writableStream = fs.createWriteStream('destination.txt');

readableStream.pipe(writableStream);

writableStream.on('finish', () => {
    console.log('Data piped sucessfully from source to destination.');
});

//reading and writing to other file using pipe
const fs = require("fs");
const readStream = fs.createReadStream("example.txt");
const writeStream = fs.createWriteStream("example2.txt");
readStream.pipe(writeStream);

readStream.on("close", () => {
  res.end("File streaming completed!");
});
readStream.on('error', (err) => {
          console.error(err);
          res.statusCode = 500;
          res.end('Internal Server Error');
});