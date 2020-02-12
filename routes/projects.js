const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('projects');
});

// Add project Form
router.get('/add', function(req, res){

    res.render('form-add-project');
});

module.exports = router;
