/* -------------------------------------------
                 MODULE DEPENDENCIES
  ---------------------------------------------     
*/

/**
  * @desc search for order detail based on username
  * @param req the request
  * @param res the response
  * @return returns orderID, firstName, to join socket.io room
*/

let sql = 'CALL sp_list_orders_map(?)';

const detail = async (req, res) => {
  try {

    let username = await req.body.username.toString();

    if (username) {
      db.query(sql,
        [username], function (error, results, fields) {
          if (results.length > 0) {
            console.log(JSON.parse(JSON.stringify(results[0])));
            res.json({
              order: results[0]
            });
          } else {
            res.status(403).send({
              msg: 'No existe esa orden'
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

module.exports = detail;
