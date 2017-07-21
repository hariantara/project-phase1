const express = require('express')
var router = express.Router()
const database = require('../models/')

//show table detail order
// router.get('/', function(req,res){
//   database.detailOrder.findAll({
//     order:[['id']]
//   })
//   .then((result) =>{
//     res.render('detailOrder', {dataDetailOrder:result})
//   })
// })

router.get('/:id', function(req, res){
  database.detailOrder.findAll({
    where:{userId:req.params.id},
    attributes:['id','clientId', 'stuffId', 'createdAt', 'updatedAt' ,'quantity', 'userId'],
    include:[{all:true}]

  })
  .then((data)=>{
    database.Stuff.findAll()
    .then((dataStuff)=>{
      res.render('listDetail', {allData:data, user:req.params.id, allStuff:dataStuff});
    })
  })
})


module.exports = router
