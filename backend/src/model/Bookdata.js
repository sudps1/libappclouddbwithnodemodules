const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://usertwo:usertwo@casestudysudeep.46g81.mongodb.net/libraryapp?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const NewBookSchema = new Schema({
    title : String,
    genre : String,
    author : String,
    description : String,   
    imageUrl : String
});

var Bookdata = mongoose.model('bookdata', NewBookSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Bookdata;