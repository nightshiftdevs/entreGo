/* -------------------------------------------
                 MODULE DEPENDENCIES
  ---------------------------------------------     
*/

/**
  * @desc To create an order
  * @param req the request
  * @param res the response
  * @return Success or failure message when ORDER is created
*/

const createOrder = async (req, res) => {
  console.log(req.body);
  let order = await req.body,
    startAddress = order.startAddress,
    endAddress = order.endAddress,
    startLat = order.startLat,
    startLng = order.startLng,
    endLat = order.endLat,
    endLng = order.endLng,
    packageVolume = order.packageVolume,
    observations = order.observations,
    cost = order.cost,
    email = order.email,
    orderStatusID = order.orderStatusID;

 let sql = 'CALL sp_order_create(?,?,?,?,?,?,?,?,?,?,?)';
    db.query(sql, [startAddress, endAddress, startLat, startLng, endLat, endLng, packageVolume, observations, cost, email, orderStatusID], function (error, results, fields) {
      if (error) throw error;
      else {
        res.json({
          msg: 'Order created successfully!'
        });
      }
    });
};

module.exports = createOrder;
