const robotApi = require('./controllers/robots.js')

exports.initAllApis = (app) => {
    initRobotApi(app) 
}

function initRobotApi(app) {
    app.get('/robots', robotApi.findAllRobot)
    app.get('/robots', robotApi.findRobot)
    app.post('/robots', robotApi.createRobot)
    app.put('/robots', robotApi.updateRobot)
    app.delete('/robots', robotApi.deleteRobot)
}