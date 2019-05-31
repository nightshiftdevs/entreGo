const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

let jwt = require('jsonwebtoken');
let config = require('../config/config');
let middleware = require('../middleware/middleware');

// Connect to our database
const connection = mysql.createConnection({
  host: 'localhost',
  database: 'entregodb',
  user: 'root',
  password: '',
});

connection.connect(function(err) {
  if (err) {
    console.error(`Error trying to connect to your database: ${err.stack} `)
  }

  console.log(`Connected as id: ${connection.threadId} `)
});

// Determine if the username and password exists
connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
  if (results.length > 0) {
    request.session.loggedin = true;
    request.session.username = username;
    response.redirect('/home');
  } else {
    response.send('Incorrect Username and/or Password!');
  }			
  response.end();
});



class HandlerGenerator {
  login (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    // For the given username fetch user from DB
    let mockedUsername = 'admin';
    let mockedPassword = 'password';

    if (username && password) {
      if (username === mockedUsername && password === mockedPassword) {
        let token = jwt.sign({username: username},
          config.secret,
          { expiresIn: '24h' // expires in 24 hours
          }
        );
        // return the JWT token for the future API calls
        res.json({
          success: true,
          message: 'Authentication successful!',
          token: token
        });
      } else {
        res.send(403).json({
          success: false,
          message: 'Incorrect username or password'
        });
      }
    } else {
      res.send(400).json({
        success: false,
        message: 'Authentication failed! Please check the request'
      });
    }
  }
  index (req, res) {
    res.json({
      success: true,
      message: 'Index page'
    });
  }
}

// Starting point of the server
function main () {
  let app = express(); // Export app for other routes to use
  let handlers = new HandlerGenerator();
  const port = process.env.PORT || 8000;
  app.use(bodyParser.urlencoded({ // Middleware
    extended: true
  }));
  app.use(bodyParser.json());
  // Routes & Handlers
  app.post('/login', handlers.login);
  app.get('/', middleware.checkToken, handlers.index);
  app.listen(port, () => console.log(`Server is listening on port: ${port}`));
}

main();
