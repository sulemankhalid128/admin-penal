var express = require('express');
var User = require('../model/user');
var router = express.Router();

router.post('/signin/user', (req, res, next) => {
    console.log('called');
    User.create(req.body, function (err) {
        if (err) return next(err);
        res.redirect('/');
    });
});

module.exports = router;