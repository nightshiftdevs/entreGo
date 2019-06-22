/* -------------------------------------------
                 MYSQL SET UP
  ---------------------------------------------     
 */

module.exports = {
    'connection': {
        'host': 'us-cdbr-iron-east-02.cleardb.net',
        'user': 'ba8f37c16ea739',
        'password': '18890183',
        'database': 'heroku_dd9692e3ef68768'
    },
    'database': 'heroku_dd9692e3ef68768'
};

/* -------------------------------------------
                 MONGODB SET UP
  ---------------------------------------------     
 */

/* const mongoose = require('mongoose');
// GLobal variables of moongose to make it available to every module
mongoose.Promise = global.Promise;

module.exports = {
  'secret': 'restapisecret',
  'database': 'mongodb://localhost:27017/codigodb'
};

module.exports = {
  'secret': 'restapisecret',
  'database': 'mongodb+srv://dbUser:UEaT0gQe22pKSWDb@entrego-j6hoj.mongodb.net/test?retryWrites=true&w=majority'
};

}) */
