const Sequelize = require("sequelize");
const connection = require("../database/database");

const Category = connection.define('categories',{
    title:{
        type: Sequelize.STRING,
        AllowNull: false
    }, slug: {
        type: Sequelize.STRING,
        AllowNull: false
    }
})

//Category.sync({force: true}); //Função para forçar a recriação da tabelas

module.exports = Category;