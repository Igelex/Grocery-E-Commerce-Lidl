var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('details', { title: 'Product details' });
});

module.exports = router;
