module.exports = function(app, conn){
  var express = require('express');
  var router = express.Router();

  /* root */
  router.get('/', (req, res) => {
    res.redirect('/news');
  });

  return router;
};
 

