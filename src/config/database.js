const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('barber_db', 'barber', 'barber_234htsduyg', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;
