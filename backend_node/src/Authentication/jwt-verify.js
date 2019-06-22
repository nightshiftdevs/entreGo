/* -------------------------------------------
                 MODULE DEPENDENCIES
  ---------------------------------------------     
*/
const config = require('../../configs/config/index');
const jwt = require('jsonwebtoken');

/**
  * @desc verify if the token corresponds to the current user
  * @param req the request
  * @param res the response
  * @return sends success or failure status to the client
*/

const verifyToken = (req, res) => {
  //verify the JWT token generated for the user
  console.log('ACCESO TOKEN',config.JWT.secret);
  console.log('TOKEN',req.token);

  jwt.verify(req.token, config.JWT.secret, (err, authorizedData) => {
    if (err) {
      //If error send Forbidden (403)
      console.log('ERROR: Could not connect to the protected route');
      res.sendStatus(403);
    } else {
      //If token is successfully verified, we can send the autorized data 
      res.json({
        message: 'Successfully logged in',
        authorizedData
      });
      console.log('SUCCESS: Connected to protected route');
    }
  });
};

module.exports = verifyToken;
