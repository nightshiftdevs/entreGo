/* -------------------------------------------
                 MODULE DEPENDENCIES
  ---------------------------------------------     
*/

const server = require('../configs/app')();
const config = require('../configs/config/index');
const db = require('../configs/db');

//create the basic server setup 
server.create(config, db);

//start the server
server.start();