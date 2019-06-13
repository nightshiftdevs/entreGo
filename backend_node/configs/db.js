/* -------------------------------------------
                 MYSQL SET UP
  ---------------------------------------------     
 */

module.exports = {
    'connection': {
        'host': 'localhost',
        'user': 'root',
        'password': '',
        'database': 'entregodb'
    },
    'database': 'entregodb'
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