const router = require('express').Router();
let Product = require('../models/product.model');

router
    .get('/', (req, res) => {
        Product.find()
            .then(products => res.json(products))
            .catch(err => res.status(400).json("Error: " + err));
    })
    .post('/add', (req, res) => {
        const {name,price,img,rating,feature} = req.body;
       
        const newProduct = new Product({ name, price, img, rating, feature });

        newProduct.save()
            .then(() => res.json('PRODUCT ADDED!!'))
            .catch(err => res.status(400).json("Error: " + err));
    })

module.exports = router;