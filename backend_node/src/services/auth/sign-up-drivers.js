const signUpDrivers = async (req, res) => {
  /* let post = await req.body,
    name = post.user_name,
    pass = post.password,
    fname = post.first_name,
    lname = post.last_name,
    mob = post.mob_no; */
    console.log('inside signup', req.files);
  if (!req.files) return res.status(400).send('No files were uploaded.');

  let file1 = await req.files.userPhoto;
  let file2 = await req.files.vehiclePhoto;
  let userPhoto = file1.name;
  let vehiclePhoto = file2.name;

  if (file1.mimetype && file2.mimetype == "image/jpeg" || file1.mimetype && file2.mimetype == "image/png" || file1.mimetype && file2.mimetype == "image/gif") {

    file1.mv('public/images/' + file1.name, function (err) {
      console.log('inside signup', file1.mimetype);
      if (err) return res.status(500).send(err);
      /* var sql = "INSERT INTO `users_image`(`first_name`,`last_name`,`mob_no`,`user_name`, `password` ,`image`) VALUES ('" + fname + "','" + lname + "','" + mob + "','" + name + "','" + pass + "','" + img_name + "')";
      var query = db.query(sql, function (err, result) {
        console.log(result);
      }); */
    });
    file2.mv('public/images/' + file2.name, function (err) {
      console.log('inside signup', file2.mimetype);
      if (err) return res.status(500).send(err);
      /* var sql = "INSERT INTO `users_image`(`first_name`,`last_name`,`mob_no`,`user_name`, `password` ,`image`) VALUES ('" + fname + "','" + lname + "','" + mob + "','" + name + "','" + pass + "','" + img_name + "')";
      var query = db.query(sql, function (err, result) {
        console.log(result);
      }); */
    });

    res.json({
      data: req.body,
      msg: 'Image successfully uploaded!'
    })
  } else {
    message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
  }
};

module.exports = signUpDrivers;
