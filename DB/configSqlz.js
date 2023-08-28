// config .js 

const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('tatweer_db', 'root', 'root', {host: 'localhost', dialect: 'mysql'});

module.exports = sequelize;

