var express = require('express');
var router = express.Router();
var EmployeeModel = require('../models/employees.model');

router.use(function(req,res,next){
    console.log('req receiced at employees route');
    next();
})

router.get("/list",function(req,res){
    EmployeeModel.find({}).then(function(data){
        res.send(data)
    }).catch(function(){console.log(err)})
})
router.post("/add",function(req,res){
    console.log(req.body)
    var newEmployee = new EmployeeModel(req.body);
    console.log(newEmployee);
    newEmployee.save()
    res.send("please wait")
})
router.get("/employeeDetailsByName/:fn",function(req,res){
    console.log(req.params)
    EmployeeModel.find({firstname:req.params.fn}).then((data)=>{
        res.json(data)
    })
})
router.delete("/deleteEmployee/:fn",function(req,res){
    console.log(req.params)
    EmployeeModel.deleteOne({firstname:req.params.fn}).then((data)=>{
        console.log(data)
        res.json({message:'deleted'})
    })
})
router.put("/updateEmployee/:fn",function(req,res){
    console.log("request at updateEmployee",req.body)
    EmployeeModel.updateOne({firstname:req.body.firstname},req.body)
    .then(data=>res.json(data))

})
module.exports = router;