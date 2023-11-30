let valores = process.argv.slice(2);
let suma = valores.reduce((total, arg) => total + Number(arg), 0);
console.log(suma);
