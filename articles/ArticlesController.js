const express = require("express");
const router = express.Router();
const Category = require("../categories/CategoryModel");

router.get("/articles", (req,res) =>{
    res.send("ROTA DE Artigos");
});

router.get("/admin/articles/new", (req,res) =>{
    res.render('admin/articles/new');
});

module.exports = router;