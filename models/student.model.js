var mongoose = require('mongoose');
var studentSchema = mongoose.Schema({
    firstname:String,
    lastname:String,
    mobile:{
        type:Number,
        required:true
    },
    email:String
})

var Student = mongoose.model("student",studentSchema);
module.exports=Student;