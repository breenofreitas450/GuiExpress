const express = require("express");
const router = express.Router();

router.get("/articles", (req,res) =>{
    res.send("ROTA DE Artigos");
});

module.exports = router;