const hServ = require('./http.service');
const fs = require('fs');
const xml2js = require('xml2js');
const parser = xml2js.Parser();

function getSenators(next) {
    console.log('Getting senators, the method!');
    const geturl = 'https://www.senate.gov/general/contact_information/senators_cfm.xml';
    hServ.doGet(geturl, (dataString) => {
        console.log('Back from doGet!');
        parser.parseString(dataString, (err, result) => {
            if (err) {
                throw err;
            } else {
                next(result['contact_information']['member']);
            }
        });
    });
}

module.exports = { getSenators };
