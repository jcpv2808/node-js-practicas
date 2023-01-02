//modulos
var path = require('path');
var util = require('util');
var v8 = require('v8')
//console.log(path.join(__dirname,'www','anidado1','anidado2'))
/*var nombre = ["Jean", "Carlo", "Juan", "Luis", "Alonso"];
nombre.forEach(e => {
    let msj = util.format('Hola %s', e)
    console.log(msj)
});
*/
console.log(v8.getHeapStatistics())