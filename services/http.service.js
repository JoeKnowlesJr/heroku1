const Request = require("request");

function doGet(reqUrl, next) {
    Request.get(reqUrl, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        next (body);
    });
}

module.exports = { doGet };
