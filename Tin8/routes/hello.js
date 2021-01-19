//Handle route hello by returning a simple “hello world” message
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World :)');
});

module.exports = router;
