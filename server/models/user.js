var _ = require('lodash');

var users = [
  {"id": 1,  "email": "rollandwalsh@gmail.com", "username": "rwalsh", "name": "Rolland Walsh", "bio": "Creator of Movie App.", "twitter_handle": "@rollandpwalsh", "site": "rollandwalsh.com"},
  {"id": 2,  "email": "rollandwalsh@gmail.com", "username": "rwalsh", "name": "Rolland Walsh", "bio": "Creator of Movie App.", "twitter_handle": "@rollandpwalsh", "site": "rollandwalsh.com"},
  {"id": 3,  "email": "rollandwalsh@gmail.com", "username": "rwalsh", "name": "Rolland Walsh", "bio": "Creator of Movie App.", "twitter_handle": "@rollandpwalsh", "site": "rollandwalsh.com"},
  {"id": 4,  "email": "rollandwalsh@gmail.com", "username": "rwalsh", "name": "Rolland Walsh", "bio": "Creator of Movie App.", "twitter_handle": "@rollandpwalsh", "site": "rollandwalsh.com"},
  {"id": 5,  "email": "rollandwalsh@gmail.com", "username": "rwalsh", "name": "Rolland Walsh", "bio": "Creator of Movie App.", "twitter_handle": "@rollandpwalsh", "site": "rollandwalsh.com"},
  {"id": 6,  "email": "rollandwalsh@gmail.com", "username": "rwalsh", "name": "Rolland Walsh", "bio": "Creator of Movie App.", "twitter_handle": "@rollandpwalsh", "site": "rollandwalsh.com"}
];

module.exports = {
  get: function(id) {
    return _.find(users, function(user){
      return user.id === id;
    });
  },
  all: function() {
    return users;
  }
}