var express = require('express');
var User = require('../model/user');
var router = express.Router();

router.post('/login', (req, res, next) =>{
    var email = req.body.email;
    var pwd = req.body.pwd;
    User.findOne({email: email, pwd: pwd}, function(err, user){
        if(err) return next(err);
        if(!user){
            return res.render('front-page', {error: "Email or Password don't match", title:''});
        };
        res.redirect('/dashboad');
    });
});

module.exports = router;