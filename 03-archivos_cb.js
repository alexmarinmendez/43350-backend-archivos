const fs = require('fs')    //CommonJS

const filename = './ejemplo.txt'

fs.writeFile(filename, 'Hola Mundo', error => {
    if (error) return console.log('Hubo un error')
    fs.appendFile(filename, '\nChau Mundo', error => {
        if (error) return console.log('Hubo un error')
        fs.readFile(filename, 'utf-8', (error, contenido) => {
            if (error) return console.log('Hubo un error')
            console.log(contenido)
        })
    })
    console.log('Datos escritos correctamente')
})

console.log('FIN')