var _ = require('lodash');
var Category = require('./category')
var User = require('./user')
var movies = [
  {"id":1 ,"userId": 9, "categoryId": 8, "description": "NgModel Best Practice", "content" : "Always use dot syntax when using NgModel! Treat Scope as read-only in templates & write-only in controllers. The purpose of the scope is to refer to the model, not be the model. The model is your javascript objects. When doing bidirectional binding with ngModel make sure you don't bind directly to the scope properties. This will cause unexpected behavior in the child scopes.", "title" : "NgModel BP"},
  {"id":2 ,"userId": 2, "categoryId": 3, "description" : "Markers on a **DOM element** that tell AngularJS's HTML compiler `$compile` to attach a specified behavior to that DOM element.", "title" : "Directives", "content": "Markers on a **DOM element**"},
  {"id":3 ,"userId": 1, "categoryId": 6, "description" : "Clarify the confusion between Service the term and `service` the angular method and to explain the 5 different Service recipes in Angular.", "title" : "Service Service? Really Angular?","content": "There are 5 Recipes used to create a Service. One of those *was* unfortunately named, Service. So yes, amongst its fellow peers such as Provider Service and Factory Service, there is in fact a Service Service."},
  {"id":4 ,"userId": 2, "categoryId": 6, "description" : "QUESTIONABLE DESCRIPTION GOES HERE", "title" : "TEST TEST TEST", "content": "QUESTIONABLE CONTENT GOES HERE"},
  {"id":5 ,"userId": 4, "categoryId": 6, "description" : "Define Service", "title" : "What is a Service", "content": "Service: Angular services are objects that are wired together using dependency injection (DI). You can use services to organize and share code across your app."},
  {"id":6 ,"userId": 5, "categoryId": 6, "description" : "Steps for Creating a Service", "title" : "How do you create a Service?", "content": "You can register a service to our Angular module `app` with a one of the following 5 recipes: \\n 	- **factory**  \\n 	- **provider**  \\n 	- **service**  \\n 	- **value**  \\n 	- **constant** "}
]
var lastId = 6;

var buildMovies = function() {
  // Make a deep copy so we don't change the main movies array
  var rawMovies = JSON.parse(JSON.stringify(movies));
  var builtMovies = [];
  var movie;

  for(var i=0, l=rawMovies.length; i < l; i++) {
    movie = rawMovie[i];
    movie.user = User.get(movie.userId);
    movie.category = Category.get(movie.categoryId);
    builtMovies.push(movie);
  }
  return builtMovies
}

module.exports = {
  get: function(id) {
    return _.find(buildMovies(), function(movie){
      return movie.id === id;
    });
  },
  all: function() {
    return buildMovies();
  },
  update: function(movie) {
    var updatedMovie;
    for(var i=0, l=movies.length; i < l; i++) {
      if(movies[i].id === movie.id){
        _.assign(movies[i], movie);
        updatedMovie = movies[i];
        break;
      }
    }
    return updatedMovie;
  },
  delete: function(id) {
    var deletedMovie;
    for(var i=0, l=movies.length; i < l; i++) {
      if(movies[i].id === id){
        deletedMovie = movies[i];
        movies.splice(i, 1);
        break;
      }
    }
    return deletedMovie;
  },
  create: function(movie) {
    lastId += 1;
    movie.id = lastId;
    movies.push(movie)
    return movie;
  }
}