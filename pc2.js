console.log(process.argv)
function param(p){
    var index = process.argv.indexOf(p)
    return process.argv[index+1]
}
var nombre = param("--nombre");
var edad = param("--edad")
console.log(`La edad de ${nombre} es ${edad} años`)