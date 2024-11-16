var express = require('express');
var app = express();
var cors = require('cors')
var mongoose = require('mongoose');
app.use(cors())
var studentRoutes = require('./student/student.routes');
var employeeRoutes = require('./employees/employee.routes')

var bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://infoedupoly:edupoly83@cluster0.eitlw5l.mongodb.net/be37');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.use(function(req,res,next){
    console.log("request received")
    next();
})

app.use("/student",studentRoutes);
app.use("/employees",employeeRoutes)

app.listen(4300,()=>{console.log('Server Running on 4300 \nplease use http://localhost:4300')})