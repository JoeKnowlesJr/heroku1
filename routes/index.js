const express = require('express');
const router = express.Router();
const LogRecord = require('../models/logRecord');
const sServ = require('../services/senator.service');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/senators', (req, resp, next) => {
  console.log('Getting senators!');
  const senators = sServ.getSenators(senators => {
    console.log('Got senators!');
    resp.render('senators', {
      senators: senators
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

router.get('/qod', (req, res, next) => {
  res.send(re);
});

module.exports = router;
