const express = require('express');
const router = express.Router();

// application -------------------------------------------------------------
router.get('*', function(req, res) {
    console.log('Getting frontend');
    const indexPath = path.join(__dirname, '../public/jkp/src', 'index.html');
    console.log(indexPath);
    res.sendFile(indexPath); // load the single view file (angular will handle the page changes on the front-end)
});

module.exports = router;
