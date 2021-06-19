const robotModel = require('./models/mod_robot.js')

exports.initAllModels = () => {
    initRobotModel() 
}

function initRobotModel() {
    robotModel.init()
}