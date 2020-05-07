const fs = require('fs');

let crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject('El parametro recibido no es un numero');
      return;
    }

    let data = '';

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i} \n`;
    }

    fs.writeFile(`tablas/tabla-del-${base}-al-${limite}.txt`, data, (err) => {
      if (err) reject(err);
      else resolve(`tablas/tabla-del-${base}-al-${limite}.txt`);
    });
  });
};

let listarTabla = (base, limite) => {
  let data = '';

  for (let i = 1; i <= limite; i++) {
    data += `${base} * ${i} = ${base * i} \n`;
  }

  return data;
};

let listarTabla2 = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject('El parametro recibido no es un numero');
      return;
    }

    let data = '';

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i} \n`;
    }

    if (data == undefined) reject(`No se pudo realizar la lista`);
    else resolve(`La tabla de multiplicar es: \n${data}`);
  });
};

module.exports = {
  crearArchivo,
  listarTabla,
  listarTabla2,
};
