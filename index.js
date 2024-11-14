const { registrar, leer } = require('./operaciones')
const [,, operacion, nombre, edad, tipo, color, enfermedad] = process.argv

if (operacion === 'registrar') {
    registrar(nombre, edad, tipo, color, enfermedad)
} else if (operacion === 'leer') {
    leer()
} else {
    console.log('Operación no válida. Use "registrar" o "leer".')
}

/*
//comandos 
node index.js registrar Benito "2 años" perro blanco vomitos
node index.js registrar Julieta "6 años" perro amarillo moquillo
node index.js leer
*/