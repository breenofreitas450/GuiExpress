const Sequelize = require("sequelize");
const connection = require("../database/database");
const category = require("../categories/CategoryModel");

const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },slug:{
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


category.hasMany(Article);// Uma categoria te muitos artigos 1 para muitos
Article.belongsTo(category); // UM ARTIGO PERTENCE A UMA CATEGORIA 1 para 1


//Article.sync({force: true}); Função para forçar a recriação da tabelas

module.exports = Article;