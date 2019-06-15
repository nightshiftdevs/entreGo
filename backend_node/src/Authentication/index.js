const tokenInHeaders = require('./jwt-middleware');
const verifyToken = require('./jwt-verify');

module.exports = { tokenInHeaders, verifyToken };