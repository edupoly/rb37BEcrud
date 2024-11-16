var mongoose = require('mongoose');

var employeeSchema = mongoose.Schema({
    firstname:String,
    lastname:String,
    age:Number,
})

var EmployeeModel = mongoose.model("employee",employeeSchema);

module.exports = EmployeeModel;