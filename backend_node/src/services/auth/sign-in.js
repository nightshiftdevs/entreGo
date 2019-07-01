/* -------------------------------------------
                 MODULE DEPENDENCIES
  ---------------------------------------------     
*/

const config = require('../../../configs/config/index');
const jwt = require('jsonwebtoken');

/**
  * @desc generates token when users sign-in
  * @param req the request
  * @param res the response
  * @return token, and user[id, username, email] or failure
*/

const login = async (req, res) => {
  try {
    
    let username = await req.body.username.toString();
    let password = await req.body.password;
    
    if (username && password) {
      db.query(`SELECT * FROM USERS WHERE password ='${password}' AND email ='${username}'`,
        [username, password], function (error, results, fields) {
          if (results.length > 0) {
            let token = jwt.sign({ username: username }, config.JWT.secret, {
              expiresIn: config.JWT.expiresIn
            });
            console.log(results);
            res.json({
              user: {
                success: true,
                message: 'Authentication successful!',
                id: results[0].id,
                username: results[0].email,
                roleID:  results[0].roleID,
              },
              token: token
            });
          } else {
            res.status(403).send({
              msg: 'Usuario o contraseña incorrectos'
            });
          }
        })
    };
  } catch (error) {
    return res.status(500).json({
      'code': 'SERVER_ERROR',
      'description': 'something went wrong, Please try again'
    });
  }
};

module.exports = login;
