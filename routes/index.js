const express = require('express');
const router = express.Router();
const hServ = require('../services/http.service');
const xml2js = require('xml2js');
const parser = xml2js.Parser();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index');
});

router.get('/senators', (req, resp, next) => {
  req.xmlurl = 'https://www.senate.gov/general/contact_information/senators_cfm.xml';

  hServ.doGet(req, resp, (req, res) => {

    console.log(res);

    parser.parseString(res.data, (err, result) => {
      if (err) {
        throw err;
      } else {
        resp.render('senators', {
          senators: result
        });
      }
    });
  });
});

module.exports = router;
