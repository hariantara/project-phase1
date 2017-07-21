const express = require('express');
var router = express.Router();
const database = require('../models');

//show data user
router.get('/', function(req, res){
  database.User.findAll({
    order: [["id"]]
  })
  .then((result) =>{
    res.render('userEjs', {userData:result})
  })
})
//go to add profile
router.get('/add', function(req, res){
  res.render('userAddForm')
})
// add data userAddForm
router.post('/add', function(req, res){
  database.User.create({
    nama:req.body.namaEjs,
    telp:req.body.phoneEjs,
    alamat:req.body.alamatEjs,
    email:req.body.emailEjs,
    createdAt:new Date(),
    updatedAt:new Date()
  })
  .then(()=>{
    res.redirect('/user')
  })
})
//edit form
router.get('/edit/:id', function(req, res){
  database.User.findById(req.params.id)
  .then((data)=>{
    console.log(data);
    res.render('userEditForm', {userEdit:data})
  })
})
//update data userEditForm
router.post('/edit/:id', function(req, res){
  database.User.update({
    nama: req.body.namaEjs,
    telp: req.body.phoneEjs,
    alamat: req.body.alamatEjs,
    email: req.body.emailEjs,
    createdAt:new Date(),
    updatedAt: new Date()
  },{
    where:{
      id:req.params.id
    }
  })
  .then(()=>{
    res.redirect('/user')
  })
})
//delete user
router.get('/delete/:id', function(req, res){
  database.User.destroy({where:{id:req.params.id}})
  .then(()=>{
    res.redirect('/user')
  })
})

//------------MVP--------------//
//order form
router.get('/order/:id', function(req, res){
  database.Stuff.findAll()
    .then((dataStuff)=>{
      database.detailOrder.findAll({
        where:{userId:req.params.id},
        attributes:['id','clientId', 'stuffId', 'createdAt', 'updatedAt' ,'quantity', 'userId'],
        include:[{all:true}]
      })
      .then((data)=>{
      res.render('orderStuff', {allData:data, user:req.params.id, allStuff:dataStuff});
    })
  })
})

// res.render('orderStuff', {userData:data, detailData:detail ,stuff:dataStuff})

//add order
router.post('/order/:id', function(req, res){
  database.detailOrder.create({
    userId:req.params.id,
    stuffId: req.body.typeStuff,
    quantity: req.body.quantity,
    createAt: new Date(),
    updatedAt: new Date()
  })
  .then(()=>{
    res.redirect(`/user/order/${req.params.id}`)
  })
})
//delete order
router.get('/detail/delete/:id', function(req,res){
  database.detailOrder.destroy({where:{id:req.params.id}})
  .then(()=>{
    res.redirect(`/user/order/${req.params.id}`)
  })
})

module.exports = router;
