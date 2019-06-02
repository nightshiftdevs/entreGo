let jwt = require('jsonwebtoken');
const config = require('../config/config');

const checkToken = (req, res, next) => {
  const header = req.headers['authorization'];
  
  if(typeof header !== 'undefined') {
      const bearer = header.split(' ');
      const token = bearer[1];

      req.token = token;
      console.log('define a token',req.token);
      next();
  } else {
      //If header is undefined return Forbidden (403)
      res.sendStatus(403)
  }
}

module.exports = {
  checkToken: checkToken
}
