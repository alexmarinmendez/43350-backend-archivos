import fs from 'fs' //ES Modules

const user1 = {
    username: 'alexmarinmendez',
    age: 45,
    email: 'alexmarinmendez@gmail.com'
}
const user2 = {
    username: 'ramiro',
    age: 25,
    email: 'ramiro@gmail.com'
}

await fs.promises.writeFile('./users.json', JSON.stringify([user1, user2], null, '\t'))

let contenido = JSON.parse(await fs.promises.readFile('./users.json', 'utf-8'))

contenido[1].age = 35
await fs.promises.writeFile('./users.json', JSON.stringify(contenido, null, '\t'))



