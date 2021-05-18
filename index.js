//Variaveis para Instanciamento das Bibliotecas
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
// Variaveis para para importação de rotas
const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");
// Importação das tabelas
const Article = require("./articles/ArticleModel");
const Category = require("./categories/CategoryModel");

//Motor para Visualização
app.set('view engine', 'ejs');

//static
app.use(express.static('public'));

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Conexão com o Banco
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso.")
    })
    .catch((error) =>{
        console.log(error);
    })

//Instaciamento de rotas
app.use("/", categoriesController);
app.use("/", articlesController);


app.get("/", (req,res) =>{
    res.render('index');
});

app.listen(8080, () =>{
    console.log("O servidor está rodando!");
});
