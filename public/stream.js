// const fs=require('fs');
// const readableStream=fs.createReadStream('example.txt',{encoding: 'utf-8',highWaterMark:50});

// readableStream.on('data',(chunk)=>{
//     console.log('Reading from file');
//     console.log(chunk);
// });
// readableStream.on('end',()=>{
//     console.log('Finshing the reading data from the file.');
// });
// readableStream.on('error',(err)=>{
//     console.log('Error reading data:',err);
// });


//writing data
const fs=require('fs');
const writeableStream = fs.createWriteStream('output.txt');
const data=['Hello, World!\n','This is a test.\n'];
data.forEach(chunk=>{
    writeableStream.write(chunk);
});
writeableStream.end();

//Listen for the finish event,which indicates that all the data has been written
writableStream.on('finish',()=>{
    console.log('finishing writing the data to the file');
});
writeablStream.on('error',(err)=>{
    console.error('Error writing data: ', err);
});