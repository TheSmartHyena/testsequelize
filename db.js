const { Sequelize } = require('sequelize')
const secrets = require('./secrets')

class PrivateDb {
    constructor() {
        this.sequelize = new Sequelize(secrets.database, secrets.user, secrets.password, {
            host: secrets.host,
            dialect: secrets.dialect
        })
    }
}

class Db {

    constructor() {
        throw new Error('Use Singleton.getInstance()')
    }

    static getInstance() {
        if (!Db.instance) {
            Db.instance = new PrivateDb()
        }
        return Db.instance
    }
}

module.exports = Db