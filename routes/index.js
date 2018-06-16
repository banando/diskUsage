var express = require('express');
var router = express.Router();
const  checkDiskSpace = require('check-disk-space');

/* GET home page. */
router.get('/', function(req, res, next) {
  checkDiskSpace('/').then((diskSpace) => {
    let { size, free } = diskSpace;

    size = size / 1000000000;
    free = free / 1000000000;
    const used = size - free;
    let warn = false;
    if (free < 180){
      warn = 'red';
    }
    res.render('index', {
      title: 'Disk Usage',
      size,
      free,
      used,
      warn
     });
  });
});

module.exports = router;






