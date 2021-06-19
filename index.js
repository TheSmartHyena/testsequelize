const express = require('express')
const winston = require('winston')
const sequelize = require('./db.js').getInstance().sequelize

const app = express()

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],  
})

const initModels = require('./initModels.js')
initModels.initAllModels()

const syncDb = async () => {
    await sequelize.sync({ force: true })
}
syncDb()

app.logger = logger

const initApis = require('./initApis.js')
initApis.initAllApis(app)

app.listen(8080, () => { 
// app.listen(process.env.PORT, () => { // heroku
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})