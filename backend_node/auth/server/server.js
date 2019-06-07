const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

let jwt = require('jsonwebtoken');
let config = require('../config/config');
let middleware = require('../middleware/middleware');
let handlersCars = require('../handlers/handlers')

// Connect to our database
const connection = mysql.createConnection({
  host: 'localhost',
  database: 'entregodb',
  user: 'root',
  password: '',
});

connection.connect(function (err) {
  if (err) {
    console.error(`Error trying to connect to your database: ${err.stack} `)
  }

  console.log(`Connected as id: ${connection.threadId} `)
});

// Stored procedures
const sqlInsert = `CALL USP_CREATE(?,?,?,?,?,?,?)`;

class HandlerGenerator {
  login(req, res) {
    let username = req.body.username;
    let password = req.body.password;

    if (username && password) {
      connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?',
        [username, password], function (error, results, fields) {

          if (results.length > 0) {

            let token = jwt.sign({ username: username }, config.secret, {
              expiresIn: '24h'
            });

            res.json({
              user: {
                success: true,
                message: 'Authentication successful!',
                id: results[0].id,
                username: results[0].username,
                email: results[0].email
              },
              token: token
            });
          } else {
            res.status(403).send({
              msg: 'Usuario o contraseña incorrectos'
            });
          }
        });
    } else {
      res.status(400).send({
        msg: 'Authentication failed! Please check the request'
      });
    };
  };

  logout(req, res) {
    return res.status(200).json({
      sucess: true,
      message: 'User has logged out successfully!'
    });
  }
  index(req, res) {
    //verify the JWT token generated for the user
    jwt.verify(req.token, config.secret, (err, authorizedData) => {
      console.log(req.token);
      if (err) {
        //If error send Forbidden (403)
        console.log('ERROR: Could not connect to the protected route');
        res.sendStatus(403);
      } else {
        //If token is successfully verified, we can send the autorized data 
        res.json({
          message: 'Successfully logged in',
          authorizedData
        });
        console.log('SUCCESS: Connected to protected route');
      }
    })
  }
}

class HandleDrivers {

  register(req, res) {
    let params = req.body;
    console.log(params);
    connection.query(sqlInsert,
      [params.firstName,
      params.lastName,
      params.dni,
      params.genre,
      params.email,
      params.password,
      params.roleUser])

      return res.status(200).json({
        response: req.body,
        message: 'Driver created successfully!'
      });

  };

  errors(error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  }
};

// Starting point of the server
function main() {
  let app = express(); // Export app for other routes to use

  // To allow access from other http addresses
  const cors = require('cors');
  const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }
  app.use(cors(corsOptions));

  let handlers = new HandlerGenerator();
  let handlersDrivers = new HandleDrivers();
  const port = process.env.PORT || 3000;
  app.use(bodyParser.urlencoded({ // Middleware
    extended: true
  }));
  app.use(bodyParser.json());

  // EndPoints, Routes & Handlers for LOGIN
  app.post('/api/auth/login', handlers.login); // Will return a new token
  app.get('/api/auth/logout', handlers.logout); // Will send a success message when logged out
  app.get('/api/auth/user', middleware.checkToken, handlers.index); // Verify if token is active and if it belongs to the same user
  app.listen(port, () => console.log(`Server is listening on port: ${port}`)); // Defines which port to listen for

  // EndPoints, Routes & Handlers for DRIVERS REGISTER
  app.post('/api/register/drivers', handlersDrivers.register, handlersDrivers.errors); // Will return a success message
  app.post('/api/register/cars', handlersCars.registerCars, handlersCars.errors); // Will return a success message
}

main();
