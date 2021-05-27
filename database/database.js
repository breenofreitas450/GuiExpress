const Sequelize = require("sequelize");
const connection = new Sequelize('guiespress', 'root','Breno*9561',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;
