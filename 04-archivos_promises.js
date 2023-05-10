const fs = require('fs')

const filename = './ejemplo.txt'

const operacionesAsync = async() => {
    await fs.promises.writeFile(filename, 'Hola Mundo!!')

    let contenido = await fs.promises.readFile(filename, 'utf-8')
    console.log(contenido)

    await fs.promises.appendFile(filename, '\nSaludos desde las promises!')

    await fs.promises.unlink(filename)

}

operacionesAsync()
console.log('FIN')