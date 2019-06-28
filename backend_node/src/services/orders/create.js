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

const sql = 'call sp_list_orders';

const list = async (req, res) => {
  try {
    db.query(sql, function (error, results, fields) {
      console.log(results);
      res.json({
        user: {
          roleID: results[0].roleID
        },
        token: token
      });
    })
  } catch (error) {
  return res.status(500).json({
    'code': 'SERVER_ERROR',
    'description': 'something went wrong, Please try again'
  });
}
};

module.exports = list;
