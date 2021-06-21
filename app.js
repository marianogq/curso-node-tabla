const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();

// Tabla de multiplicar
crearArchivo(argv.b, argv.l, argv.h)
    .then (nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado!!!'))
    .catch (err => console.log(err));


//const base = 4;
// const [,,arg3='base=5']=process.argv;
// const [, base=5]=arg3.split('=');
// console.log(base);

// crearArchivo(base)
//     .then (nombreArchivo => console.log(nombreArchivo, 'Creado!!!'))
//     .catch (err => console.log(err));
