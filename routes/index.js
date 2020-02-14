const express = require('express');
const router = express.Router();
const LogRecord = require('../models/logRecord');
const hServ = require('../services/http.service');
const xml2js = require('xml2js');
const parser = xml2js.Parser();
const _ = require('underscore');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index');
});

router.get('/senators', (req, resp, next) => {
  req.xmlurl = 'https://www.senate.gov/general/contact_information/senators_cfm.xml';
  hServ.doGet(req, resp, (req, res) => {
    const dataString = req.body.data;
    parser.parseString(dataString, (err, result) => {
      if (err) {
        throw err;
      } else {
        // const party = req.params.party;
        const _senators = result['contact_information']['member'];
        // let retVal = {};
        // for (let sen in _senators) {
        //   console.log(sen);
        //   if (sen.party === party) retVal.push(sen);
        // }
        // console.log(retVal);
        resp.render('senators', {
          senators: _senators
        });
      }
    });
  });
});

router.get('/logs', (req, res, next) => {
  LogRecord.find({}, (err, results) => {
    if (err) throw err;
    res.render('logs', {
      logs: results
    })
  });
});

router.get('/about', (req, res, next) => {
  res.render('about');
});

router.get('/contact', (req, res, next) => {
  res.render('contact');
});

module.exports = router;
