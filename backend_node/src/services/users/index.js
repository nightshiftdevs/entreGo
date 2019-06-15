const list = require('./list');
const get = require('./get');
const create = require('./create');
const update = require('./update');
const remove = require('./remove');

module.exports = {
    getUsers: list,
    getUserById: get,
    createUser: create,
    updateUser: update,
    deleteUser: remove
}
