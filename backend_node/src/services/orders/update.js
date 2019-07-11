/* -------------------------------------------
                 MODULE DEPENDENCIES
  ---------------------------------------------     
*/

/**
  * @desc updates orders' status
  * @param req the request
  * @param res the response
  * @return returns success or error message
*/

let sql = 'CALL sp_update_order(?,?)';

const update = async (req, res) => {
  console.log('STATUS', req.body);

  try {

    let order = await req.body,
      orderID = order.orderID,
      orderStatusID = 1;

    db.query(sql,
      [orderID, orderStatusID], function (error, results, fields) {
        if (error) throw error;
        if (results.affectedRows > 0) {
          res.json({
            msg: "Order status updated successfully!"
          });
        } else {
          res.status(403).send({
            msg: "That order doesn't exist"
          });
        }
      });

  } catch (error) {
    return res.status(500).json({
      'code': 'SERVER_ERROR',
      'description': 'something went wrong, Please try again'
    });
  }
};

module.exports = update;
