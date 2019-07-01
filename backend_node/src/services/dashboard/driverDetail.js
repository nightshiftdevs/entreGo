/* -------------------------------------------
                 MODULE DEPENDENCIES
  ---------------------------------------------     
*/

/**
  * @desc provides driver's details
  * @param req the request
  * @param res the response
  * @return an object containing driver's details
*/

const sql = 'call sp_list_driver(?)';

const list = async (req, res) => {
  let username = await req.body.username.toString();
  try {
    db.query(sql, [username], function (error, results, fields) {
      if (error) throw error;
      console.log('LIST DRIVER',results[0]);
      res.json({
        list: results[0]
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
