const buffer=Buffer.alloc(4);
console.log(buffer);
//writing to buffer
buffer.write('Hello ','utf-8');
//reading from buffer
const data=buffer.toString('utf-8');
console.log(data);


//concatenating buffer
const buffer1=Buffer.from('Hello','utf-8');
const buffer2=Buffer.from('world','utf-8');
const concatenatedBuffer=Buffer.concat( [buffer1,buffer2] );
console.log(concatenatedBuffer.toString('utf-8'));