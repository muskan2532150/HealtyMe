const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res)=>{
User.find()
.then(users=>res.json(users))
.catch(err => res.status(400).json("Error: "+err));
});

router.route('/add').post((req,res)=>{
    const {username,profile_pic,email,password} = req.body;

    const newUser = new User({username,profile_pic,email,password});
    
    newUser.save()
    .then(()=>res.json('USER ADDED!!'))
    .catch(err=> res.status(400).json("Error: "+ err));
});

module.exports= router;