/* -------------------------------------------
                 MODULE DEPENDENCIES
  ---------------------------------------------     
*/

/**
  * @desc To sign-up clients
  * @param req the request
  * @param res the response
  * @return Success or failure message when CLIENT is created
*/

const signUpClients = async (req, res) => {

  let client = await req.body,
    password = client.password,
    email = client.email,
    roleID = 1,
    firstName = client.firstName,
    lastName = client.lastName,
    cellphone = client.cellphone,
    clientPhoto = 'dummydummy',
    bankAccount = 'dummydummy';
  
  let sql = 'CALL sp_client_create(?,?,?,?,?,?,?,?)';
  db.query(sql, [password, email, roleID, firstName, lastName, cellphone, clientPhoto, bankAccount], function (error, results, fields) {
    if (error) throw error;
    else {
      res.json({
        roleID: roleID,
        username: email,
        msg: 'Cliente created successfully!'
      });
    }
  });
};

module.exports = signUpClients;
