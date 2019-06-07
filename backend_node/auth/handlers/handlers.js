
// Stored procedures
const sqlInsertCars = `CALL USP_CREATECARS(?,?,?,?,?)`;

class HandlersCars {

  registerCars(req, res) {
    console.log(req.body);
    /* let params = req.body;
    console.log(params);
    connection.query(sqlInsertCars,
      [params.codCar,
      params.licensePlate,
      params.cargoVolume,
      params.brand,
      params.color,
      params.vehiclePhoto
     ])

      return res.status(200).json({
        response: req.body,
        message: 'Car created successfully!'
      });
 */
  };

  errors(error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  }
};

module.exports = {
  handlersCars: HandlersCars
}
