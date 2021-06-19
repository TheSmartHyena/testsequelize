const sequelize = require('../db.js').getInstance().sequelize

exports.findAllRobot = async (req, res) => {
    const robots = await sequelize.models.Robot.findAll()
    res.json({data: robots})
    //JSON.stringify()
}

exports.findRobot = (req, res) => {}
exports.createRobot = (req, res) => {}
exports.updateRobot = (req, res) => {}
exports.deleteRobot = (req, res) => {}