const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Client = sequelize.define('Client', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false
      }
});


// Function to get frequent clients
Client.getFrequentClients = async function(threshold) {
    return await Client.findAll({
        include: [{
            model: Appointments,
            attributes: []
        }],
        attributes: {
            include: [
                [Sequelize.fn('COUNT', Sequelize.col('Appointments.id')), 'appointmentCount']
            ]
        },
        group: ['Client.id'],
        having: sequelize.literal(`COUNT(Appointments.id) >= ${threshold}`)
    });
};

module.exports = Client;
