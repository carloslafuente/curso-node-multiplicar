// const fs = require('fs');

// let base = 5;
// let data = '';

// function multiplicar(numero) {
//   for (let i = 1; i <= 10; i++) {
//     data += `${numero} * ${i} = ${numero * i} \n`;
//   }
// }

// multiplicar(base);

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//   if (err) throw err;
//   console.log(`El archivo tabla-${base}.txt ha sido creado`);
// });

// const { crearArchivo } = require('./multiplicar/multiplicar');

// let base = '9';

// crearArchivo(base)
//   .then((archivo) => {
//     console.log(`Archivo creado: ${archivo}`);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const argv = require('./config/yargs').argv;
var colors = require('colors');

const {
  crearArchivo,
  listarTabla,
  listarTabla2,
} = require('./multiplicar/multiplicar');

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

let comando = argv._[0];

switch (comando) {
  case 'listar':
    // console.log(listarTabla(argv.base, argv.limite));
    listarTabla2(argv.base, argv.limite)
      .then((lista) => {
        console.log(colors.rainbow(lista));
      })
      .catch((e) => {
        console.log(e);
      });
    break;
  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then((archivo) => {
        console.log(`Archivo creado: ${colors.rainbow(archivo)}`);
      })
      .catch((e) => {
        console.log(e);
      });
    break;
  default:
    console.log('Comando no reconocido');
}
