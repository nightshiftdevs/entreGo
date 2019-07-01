/* -------------------------------------------
                 MODULE DEPENDENCIES
  ---------------------------------------------     
*/

/**
  * @desc list all orders
  * @param req the request
  * @param res the response
  * @return an array containing all current orders
*/

const sql = 'call sp_list_orders';

const list = async (req, res) => {
  try {
    db.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
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
