var _ = require('lodash');

var users = [
  {"id": 1, "username": "rolwal", "name": "Rolland Walsh", "bio": "Human", "twitter_handle": "@rollandpwalsh", "site": "rollandwalsh.com"},
  {"id": 2, "username": "rollandwalsh", "name": "Rolland Walsh", "bio": "Human", "twitter_handle": "@rollandpwalsh", "site": "rollandwalsh.com"},
  {"id": 3, "username": "rollandpwalsh", "name": "Rolland Walsh", "bio": "Human", "twitter_handle": "@rollandpwalsh", "site": "rollandwalsh.com"},
  {"id": 4, "username": "rolland", "name": "Rolland Walsh", "bio": "Human", "twitter_handle": "@rollandpwalsh", "site": "rollandwalsh.com"},
  {"id": 5, "username": "mrwalsh", "name": "Rolland Walsh", "bio": "Human", "twitter_handle": "@rollandpwalsh", "site": "rollandwalsh.com"},
  {"id": 6, "username": "rwalsh", "name": "Rolland Walsh", "bio": "Human", "twitter_handle": "@rollandpwalsh", "site": "rollandwalsh.com"},
  {"id": 7, "username": "rw", "name": "Rolland Walsh", "bio": "Human", "twitter_handle": "@rollandpwalsh", "site": "rollandwalsh.com"}
];

var User = require('../models/user');

module.exports = function(app){
  app.get('/users', function(req, res){
    res.json(User.all());
  });

  app.get('/users/:id', function(req, res){
    var userId = parseInt(req.params.id, 10);

    res.json(User.get(userId) || {});
  });
};