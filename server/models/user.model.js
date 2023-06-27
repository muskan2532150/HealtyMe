const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: true,trim: true },
    profile_pic: {type: String},
    email: {type:String,required: true},
    password: {type:String,required: true}

}, {
timestamps:true
});

const User = mongoose.model('User', userSchema);

module.exports=User;

