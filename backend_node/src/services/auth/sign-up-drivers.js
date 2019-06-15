/* -------------------------------------------
                 MODULE DEPENDENCIES
  ---------------------------------------------     
*/

const uuidv4 = require('uuid/v4'); // this helps to generate a random string for images

/**
  * @desc To sign-up drivers
  * @param req the request
  * @param res the response
  * @return Success or failure message
*/

const signUpDrivers = async (req, res) => {
  if (!req.files) return res.status(400).send('No files were uploaded.');

  let driver = await req.body,
    password = driver.password,
    email = driver.email,
    roleID = 2,
    firstName = driver.firstName,
    lastName = driver.lastName,
    cellphone = driver.cellphone,
    birthday = driver.birthDate,
    address = driver.address,
    dni = driver.dni,
    bankAccount = driver.bankAccount,
    licensePlate = driver.licensePlate,
    cargoVolume = driver.cargoVolume,
    brand = driver.brand,
    color = driver.color;

  console.log('Files', req.files);
  console.log('Data', req.body);

  let file1 = await req.files.userPhoto;
  let file2 = await req.files.vehiclePhoto;
  let driverPhotoNameRaw = file1.name;
  let vehiclePhotoNameRaw = file2.name;
  let driverPhotoUUID = `${uuidv4()}${driverPhotoNameRaw}`;
  let vehiclePhotoUUID = `${uuidv4()}${vehiclePhotoNameRaw}`;

  if (file1.mimetype && file2.mimetype == "image/jpeg" || file1.mimetype && file2.mimetype == "image/png" || file1.mimetype && file2.mimetype == "image/gif") {
    file1.mv(`public/images/${driverPhotoUUID}`, function (err) {
      if (err) return res.status(500).send(err);
    });
    file2.mv(`public/images/${vehiclePhotoUUID}`, function (err) {
      if (err) return res.status(500).send(err);
    });
  } else {
    message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
  }

  let sql = 'CALL sp_driver_create(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
  db.query(sql, [password, email, roleID, firstName, lastName, cellphone, birthday, address, dni, bankAccount, driverPhotoUUID, licensePlate, cargoVolume, brand, color, vehiclePhotoUUID], function (error, results, fields) {
    if (error) throw error;
    else {
      res.json({
        results: results,
        data: req.body,
        msg: 'Image successfully uploaded!'
      });
    }
  });
};

module.exports = signUpDrivers;
