const express = require("express");
const router = express.Router();
const Category = require("../categories/CategoryModel");
const Article = require("./ArticleModel");
const slugify = require("slugify")

router.get("/admin/articles", (req,res) =>{
    res.render("admin/articles/index");
});

router.get("/admin/articles/new", (req,res) =>{
    Category.findAll().then(categories =>{
        res.render('admin/articles/new', {categories:categories});    
    })
    
});

router.post("/admin/article/save", (req,res)=>{
    var title = req.body.title
    var body = req.body.body
    var idcategory = req.body.category

    Article.create({
        title:title,
        slug:slugify(title),
        body: body,
        categoryid: idcategory
    }).then(()=>{
        res.redirect("/admin/articles");
    })

});

module.exports = router;