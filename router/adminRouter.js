const express = require('express');
var router = express.Router();
const database = require('../models/');

router.get("/", function(req, res){
  res.render("adminSide")
})

module.exports = router
