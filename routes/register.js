const express = require('express');
const router = express.Router();

/* GET signup page. */
router.get('/register', function(req, res, next) {
    res.render('register', { title: 'Express' });
});

module.exports = router;
