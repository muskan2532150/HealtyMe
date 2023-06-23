const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {type: String, required: true,trim: true },
    price: {type: Number,required: true},
    img: {type:String,required: true},
    rating: {type:Number},
    feature: {type: Array},    
}, {
timestamps:true
});

const Product = mongoose.model('Product', productSchema);

module.exports=Product;
