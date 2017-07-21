const express = require('express');
var router = express.Router();
const database = require('../models/');

//show data profile
router.get('/', function(req, res){
  database.Client.findAll({
    order: [["id"]]
  })
  .then((result) => {
    res.render('clientEjs', {dataClient:result})
  })
})
//add form
router.get('/add', function(req, res){
  res.render('clientAddForm')
})
//add client data
router.post('/add', function(req, res){
  database.Client.create({
    nama: req.body.namaEjs,
    telp: req.body.phoneEjs,
    alamat:req.body.alamatEjs,
    email:req.body.emailEjs,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then(() =>{
    res.redirect('/client')
  })
})
//go edit form
router.get('/edit/:id', function(req, res){
  database.Client.findById(req.params.id)
  .then((result) =>{
    res.render('clientEditForm', {clientEdit: result})
  })
})
//update edit form
router.post('/edit/:id',function(req, res){
  database.Client.update({
    nama: req.body.namaEjs,
    telp: req.body.phoneEjs,
    alamat: req.body.alamatEjs,
    email: req.body.email,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    where:{
      id: req.params.id
    }
  })
  .then(() =>{
    res.redirect('/client')
  })
})
//delete data client table
router.get('/delete/:id', function(req, res){
  database.Client.destroy({where:{id: req.params.id}})
  .then(() =>{
    res.redirect('/client')
  })
})

router.get("/detail", function(req,res){
  res.render("detailOrder")
})

module.exports = router
