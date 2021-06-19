const { DataTypes } = require('sequelize')
const sequelize = require('../db.js').getInstance().sequelize

exports.init = () => {
  sequelize.define('Robot', {
    name: {
      type: DataTypes.STRING
    }
  })
}