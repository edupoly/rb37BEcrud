var express = require('express');
var Student = require('../models/student.model')

var router = express.Router();

router.get("/allStudents",function(req,res){
    res.send("inka students leru")
})
router.post("/addStudent",function(req,res){
    console.log("HIHIHIH")
    var newStudent = new Student(req.body);

    newStudent.save()
    .then(()=>{
        res.send("please wait... im preparing")
    })
    .catch(()=>{
        res.send("please add mobile number as well")
    })
})
router.delete("/deleteStudent/:id",function(req,res){
    Student.deleteOne({id:req.params.id})
    .then((data)=>{
        console.log(data);
        res.send("delete indi")
    })
    .catch(()=>{
        res.send("delete kale")
    })
})
module.exports = router;