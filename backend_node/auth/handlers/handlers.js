const fs = require('fs');



// Stored procedures
const sqlInsert = `CALL USP_CREATECARS(?,?,?,?,?)`;

class HandlersCars {

  registerCars(req, res) {
    let params = req.body;
    console.log(params);
    connection.query(sqlInsert,
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

  };

  errors(error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  }
};

module.exports = {
  handlersCars: HandlersCars
}
