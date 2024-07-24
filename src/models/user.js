const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');



const Users = sequelize.define('Client', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
    password: {
        type: DataTypes.STRING,
        required: true
    }
});

module.exports = Users;
