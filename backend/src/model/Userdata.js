const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://usertwo:usertwo@casestudysudeep.46g81.mongodb.net/libraryapp?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const NewUserSchema = new Schema({
    firstname : String,
    lastnane : String,
    username : String,
    email : String, 
    mobno : String,
    password : String
});

var Userdata = mongoose.model('userdata', NewUserSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Userdata;