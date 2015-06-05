var _ = require('lodash');
var Movie = require('../models/movie')

module.exports = function(app) {
  app.get('/movies', function(req, res) {
    res.json(movie.all());
  });

  app.post('/movies', function(req, res) {
    // Add a delay here to simulate the delay of a live server
    // So things like button isSubmitting states can be demonstrated
    setTimeout(function(){
      res.json(Movie.create(req.body));
    }, 1000);
  });

  app.put('/movies/:id', function(req, res) {
    // Add a delay here to simulate the delay of a live server
    // So things like button isSubmitting states can be demonstrated
    setTimeout(function(){
      res.json(Movie.update(req.body));
    },1000)
  });

  app.get('/movies/:id', function(req, res) {
    var movieId = parseInt(req.param('id'), 10);
    res.json(Movie.get(movieId) || {});
  });

  app.delete('/movies/:id', function(req, res) {
    res.json(Movie.delete(parseInt(req.param('id'), 10)) || {});
  });
};
