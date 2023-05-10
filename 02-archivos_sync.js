const fs = require('fs') //CommonJS

fs.writeFileSync('./ejemplo.txt', 'Hola Mundo!')
// fs.writeFileSync('./ejemplo2.txt', 'Hola Mundo de nuevo!')

if (fs.existsSync('./ejemplo.txt')) {
    // let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')
    // console.log(contenido)

    fs.appendFileSync('./ejemplo.txt', '\nAgregamos mas contenido')

    fs.unlinkSync('./ejemplo.txt')
} else {
    console.log('No existe el archivo')
}
