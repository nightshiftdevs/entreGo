/* -------------------------------------------
                 MODULE DEPENDENCIES
  ---------------------------------------------     
*/

/**
  * @desc provides client's details
  * @param req the request
  * @param res the response
  * @return an object containing client's details
*/

const sql = 'call sp_list_client(?)';

const list = async (req, res) => {
  let username = await req.body.username.toString();
  try {
    db.query(sql, [username], function (error, results, fields) {
      if (error) throw error;
      console.log('LIST CLIENT', results[0]);
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
