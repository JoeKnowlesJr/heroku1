const Request = require("request");

function doGet(reqUrl, next) {
    console.log('Inside doGet!');
    Request.get(reqUrl, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        console.log(body);
        next (body);
    });
}

module.exports = { doGet };
