var path = require("path");
var a = 5;
var b = 10;
var c = a+b; 

console.log(`el resultado es ${c}`)
console.log(`este es el dirname: ${__dirname}`)
console.log(`este es el filename: ${__filename}`)
console.log(path.basename(__filename))