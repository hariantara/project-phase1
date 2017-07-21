const express = require('express')
var router = express.Router()
const database = require('../models/')


router.get('/', function(req, res){
  database.User.findAll({
    order: [["id"]]
  })
  .then((result) =>{
    res.render("listUser", {userData:result})
  })
})















module.exports = router
