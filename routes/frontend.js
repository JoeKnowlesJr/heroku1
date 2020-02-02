const express = require('express');
const router = express.Router();

// application -------------------------------------------------------------
router.get('*', function(req, res) {
    res.sendfile('./app/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

module.exports = router;
