import fs from 'fs'

class UserManager {
    constructor(filename) {
        this.filename = filename
        this.format = 'utf-8'
    }

    createUser = async(username, age, email) => {
        const users = await this.getUsers()
        users.push({username, age, email})
        return await fs.promises.writeFile(this.filename, JSON.stringify(users, null, '\t'))
    }

    getUsers = async() => {
        return JSON.parse(await fs.promises.readFile(this.filename, this.format))
    }
}

const manager = new UserManager('./users.json')
manager.createUser('coder', 12, 'coderhouse@coder.com')