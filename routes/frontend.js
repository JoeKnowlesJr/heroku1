const express = require('express');
const router = express.Router();

// application -------------------------------------------------------------
router.get('*', function(req, res) {
    console.log('Getting frontend');
    res.sendFile(path.join(__dirname, '../public/jkp/src', 'index.html')); // load the single view file (angular will handle the page changes on the front-end)
});

module.exports = router;
