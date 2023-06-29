const router = require('express').Router();
let User = require('../models/user.model');

router
    .get('/login', (async (req, res) => {
        const email = req.body.email;
        const users =await User.findOne({ email })
      if(users) {
       res.json(users)
        .catch(err => res.status(400).json("Error: " + err));
      }  

      else
      res.status(400).json("ACCOUNT NOT FOUND");
        
    }))
    
    .get('/', ((req, res) => {
        User.find()
            .then(users => res.json(users))
            .catch(err => res.status(400).json("Error: " + err));
    }))

    .post('/add', (async (req, res) => {
        const { username, profile_pic, email, password } = req.body;

        if (await User.findOne({ email }))
            res.status(400).json("EMAIL ALREADY EXIST");
        else {
            const newUser = new User({ username, profile_pic, email, password });
            newUser.save()
                .then(() => res.json('USER ADDED!!'))
                .catch(err => res.status(400).json("Error: " + err));
        }
    }))


module.exports = router;