const { find } = require('lodash');
const { users } = require('./users-mock');
const findByID = (id) => find(users, user => user.id == id);

module.exports =
    findByID