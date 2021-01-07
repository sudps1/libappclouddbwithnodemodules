const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://usertwo:usertwo@casestudysudeep.46g81.mongodb.net/libraryapp?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const NewWritterSchema = new Schema({
    authorname : String,
    genre : String,
    book1 : String,
    book2 : String, 
    book3 : String,
    imageUrl : String
});

var Writterdata = mongoose.model('writterdata', NewWritterSchema);                       
module.exports = Writterdata;