var _ = require('lodash');
var Category = require('./category')
var User = require('./user')
var movies = [
  {"id":1 ,"userId": 1, "categoryId": 3, "title": "A Beautiful Mind", "description": "Directed by Ron Howard", "content" : "A human drama inspired by events in the life of John Forbes Nash Jr., and in part based on the biography \"A Beautiful Mind\" by Sylvia Nasar. From the heights of notoriety to the depths of depravity, John Forbes Nash Jr. experienced it all. A mathematical genius, he made an astonishing discovery early in his career and stood on the brink of international acclaim. But the handsome and arrogant Nash soon found himself on a painful and harrowing journey of self-discovery."},
  {"id":2 ,"userId": 3, "categoryId": 1, "title": "The Big Lebowski", "description": "Directed by Joel and Ethan Cohen", "content": "Jeff Bridges plays Jeff Lebowski who insists on being called \"the Dude,\" a laid-back, easygoing burnout who happens to have the same name as a millionaire whose wife owes a lot of dangerous people a whole bunch of money -- resulting in the Dude having his rug soiled, sending him spiraling into the Los Angeles underworld."},
  {"id":3 ,"userId": 5, "categoryId": 5, "title": "Adaptation", "description": "Directed by Spike Jonze", "content": "Nicolas Cage is Charlie Kaufman, a confused L.A. screenwriter overwhelmed by feelings of inadequacy, sexual frustration, self-loathing, and by the screenwriting ambitions of his freeloading twin brother Donald (Nicolas Cage). While struggling to adapt \"The Orchid Thief,\" by Susan Orlean (Meryl Streep), Kaufman's life spins from pathetic to bizarre. The lives of Kaufman, Orlean's book, become strangely intertwined as each one's search for passion collides with the others'."},
  {"id":4 ,"userId": 4, "categoryId": 4, "title": "Forks Over Knives", "description": "Directed by Lee Fulkerson", "content": "Researchers explore the possibility that people changing their diets from animal-based to plant-based can help eliminate or control diseases like cancer and diabetes."},
  {"id":5 ,"userId": 6, "categoryId": 2, "title": "Star Trek", "description": "Directed by J.J. Abrams", "content": "Aboard the USS Enterprise, the most-sophisticated starship ever built, a novice crew embarks on its maiden voyage. Their path takes them on a collision course with Nero (Eric Bana), a Romulan commander whose mission of vengeance threatens all mankind. If humanity would survive, a rebellious young officer named James T. Kirk (Chris Pine) and a coolly logical Vulcan named Spock (Zachary Quinto) must move beyond their rivalry and find a way to defeat Nero before it is too late."},
  {"id":6 ,"userId": 4, "categoryId": 3, "title": "Pulp Fiction", "description": "Directed by Quentin Tarantino", "content": "Vincent Vega (John Travolta) and Jules Winnfield (Samuel L. Jackson) are hitmen with a penchant for philosophical discussions. In this ultra-hip, multi-strand crime movie, their storyline is interwoven with those of their boss, gangster Marsellus Wallace (Ving Rhames) ; his actress wife, Mia (Uma Thurman) ; struggling boxer Butch Coolidge (Bruce Willis) ; master fixer Winston Wolfe (Harvey Keitel) and a nervous pair of armed robbers, \"Pumpkin\" (Tim Roth) and \"Honey Bunny\" (Amanda Plummer)."}
]
var lastId = 6;

var buildMovies = function() {
  // Make a deep copy so we don't change the main movies array
  var rawMovies = JSON.parse(JSON.stringify(movies));
  var builtMovies = [];
  var movie;

  for(var i=0, l=rawMovies.length; i < l; i++) {
    movie = rawMovies[i];
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