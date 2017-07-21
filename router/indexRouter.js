const express = require("express")
const router = express.Router()
let database = require ("../models")

router.get("/", function(req, res){
  res.render("index")
})
module.exports = router
