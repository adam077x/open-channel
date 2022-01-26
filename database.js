const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('main-db', 'user', 'pass', {
    dialect: 'sqlite',
    host: './dev.sqlite'
})

module.exports = sequelize;