const hServ = require('./http.service');
const fs = require('fs');

const quotes = [];
let lastupdate;

function getQuote(req, res, next) {
    fs.readFile('./qod.txt', (err, data) => {
        if (err) throw err;
        if (!data || data === '') {
            req.geturl = 'http://quotes.rest/qod.json';
            hServ.doGet(req, res, (req, res) => {
                const quote = req.body.data.contents.quotes[0];
                const _qod = quote.quote + "\n-- " + quote.author;
                data = _qod;
                fs.writeFile('qod.txt', _qod, (err) => {
                    if (err) throw err;
                });
            });
        }
        req.getData = data;
        res.send()
        next(req, res);
    });
}

module.exports = {getQuote};
