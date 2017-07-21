
const express = require("express")
const router = express.Router()
let database = require ("../models")

router.get("/", function(req, res){
  database.Stuff.findAll({
    order:[["id"]]
  })
    .then(data => {
      res.render("stuffEjs", {dataStuff: data} )
  })
})

router.get("/add", function(req, res){
  res.render("stuffAddForm")
})

router.post("/add", function(req, res){
  database.Stuff.create({
    type : req.body.type,
    price : req.body.price,
    createdAt : new Date(),
    updatedAt : new Date()
  })
  .then(() => {
    res.redirect("/admin/stuff")
  })
})

router.get("/edit/:id", function(req, res){
  database.Stuff.findById(req.params.id)
  .then(data => {
      res.render("stuffEditForm", {dataStuff: data})
  })
})

router.post("/edit/:id", function(req, res){
  database.Stuff.update({
    type : req.body.type,
    price : req.body.price,
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    where:
    {
      id : `${req.params.id}`
    }
  })
  .then(()=> {
    res.redirect("/admin/stuff")
  })
})

router.get("/delete/:id", function(req, res){
  database.Stuff.destroy({
    where : {
      id : req.params.id
    }
  })
  .then(()=>{
    database.detailOrder.destroy({
      where:{
        stuffId: req.params.id
      }
    }).then(()=>{
      res.redirect("/admin/stuff")
    })
  })
})

module.exports = router
