const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Client = require('./client');

const Appointment = sequelize.define('Appointment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    client_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Client,
          key: 'id'
        }
      },
    service: {
        type: DataTypes.STRING,
        allowNull: false
      },
    appointment_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
    appointment_time: {
        type: DataTypes.TIME,
        allowNull: false
      },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pending'
      }
});

Client.hasMany(Appointment, { foreignKey: 'client_id' });
Appointment.belongsTo(Client, { foreignKey: 'client_id' });

module.exports = Appointment;
