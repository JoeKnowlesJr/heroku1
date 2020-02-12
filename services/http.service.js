const axios = require('axios');

function doGet(req, res, next) {
    axios.get(req.xmlurl)
        .then(response => {
            next(req, response);
        })
        .catch(error => {
            console.log(error);
        });
    next(req, res);
}

module.exports = { doGet };
