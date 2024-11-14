const fs = require('fs');

// Usando writeFileSync (síncrono)
function registrar(nombre, edad, tipo, color, enfermedad) {
    const nuevaCita = { nombre, edad, tipo, color, enfermedad }
    try {
        const data = fs.readFileSync('citas.json', 'utf8')
        const citas = JSON.parse(data)
        citas.push(nuevaCita)
        fs.writeFileSync('citas.json', JSON.stringify(citas, null, 4)) 
        console.log('Cita registrada exitosamente')
    } catch (err) {
        console.error('Error al registrar la cita:', err)
    }
}

// Usando readFileSync (síncrono)
function leer() {
    try {
        const data = fs.readFileSync('citas.json', 'utf8')
        const citas = JSON.parse(data)
        console.log(citas)
    } catch (err) {
        console.error('Error al leer el archivo:', err)
    }
}

/*
// Usando writeFile (asíncrono)
function registrar(nombre, edad, tipo, color, enfermedad) {
    const nuevaCita = { nombre, edad, tipo, color, enfermedad }
    fs.readFile('citas.json', 'utf8', (err, data) => {
        if (err) throw err
        const citas = JSON.parse(data)
        citas.push(nuevaCita)
        fs.writeFile('citas.json', JSON.stringify(citas, null, 4), (err) => {
            if (err) throw err
            console.log('Cita registrada exitosamente')
        })
    })

// Usando readFile (asíncrono)
function leer() {
    fs.readFile('citas.json', 'utf8', (err, data) => {
        if (err) throw err
        const citas = JSON.parse(data)
        console.log(citas)
    })
}
*/

module.exports = { registrar, leer }