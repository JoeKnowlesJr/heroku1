const Request = require("request");

function doGet(req, res, next) {
    Request.get(req.xmlurl, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        req.body.data = body;
        next(req, res);
    });
}

module.exports = { doGet };
