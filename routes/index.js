var fs = require('fs');
const express = require('express');
const path = require('path');
var url = require('url');
// const config = require('../../../config/config');

const router = express.Router();

const folderName = __dirname.split(path.sep).pop();
// var folderPath = __dirname + `../../../projects/${folderName}/`;

router.get('/tweet', function(req, res, next) {
  res.render(`projects/index`, {
    folderName: '',
    csrfToken: req.csrfToken(),
    language: 'engish',
  });
});

module.exports = router;
