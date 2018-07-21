var express = require('express');
var router = express.Router();

router.get('/dashboad', (req, res, next) => {
    res.render('dashboad', {title: "Dashboad"});
});

module.exports = router;