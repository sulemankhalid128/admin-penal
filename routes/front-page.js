var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) =>{
    res.render('front-page', {error: null, title: " Home Page"});
});

module.exports = router;