const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {type: String, required: true,trim: true },
    price: {type: Number,required: true},
    desc: {type: String},
    gender: {type: String},
    img: {type:String,required: true},
    rating: {type:Number},
    feature: {type: []},    
}, {
timestamps:true
});

const Product = mongoose.model('Product', productSchema);

module.exports=Product;
