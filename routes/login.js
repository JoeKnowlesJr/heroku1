const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const uServ = require('../services/user.service');
const auth = require('../services/auth.service');

router.post('/login', function(req, res, next) {

});

module.exports = router;
