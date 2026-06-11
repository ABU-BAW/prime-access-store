const mongoose = require('mongoose')

const schema = mongoose.Schema;

const  adminSchema = new schema({
    username : {
        type: String,
        required : [true, 'please provide a username'],
        minLength : [4, 'please username must be at least 4 characters long']
    },
    email : {
        type : String,
        required : [true, 'please provide an E-mail address'],
        lowercase : true,
        unique : true
    },
    password : {
        type : String,
        required : [true, 'please provide a password'],
        minLength : [6, 'please password must be at least 6 characters long']
    }
}, {timestamps : true})

const Admin = mongoose.model('admin', adminSchema);

module.exports = Admin;