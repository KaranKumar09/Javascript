//encoding data to JSON format
// const dataObject={
//     name: "jhon",
//     age:20,
//     city:"New York"
// };
// const jsonString=JSON.stringify(dataObject);
// console.log(jsonString);

//decoding from json
const jsonString='{"name": "jhon","age":30,"city": "New York"}';
const dataObject=JSON.parse(jsonString);
console.log(dataObject);
