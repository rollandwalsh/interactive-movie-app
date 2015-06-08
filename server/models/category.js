var _ = require('lodash');

var categories = [
  {"id": 1, "name": "Comedy"},
  {"id": 2, "name": "Action"},
  {"id": 3, "name": "Drama"},
  {"id": 4, "name": "Documentary"},
  {"id": 5, "name": "Mystery"},
]

module.exports = {
  get: function(id) {
    return _.find(categories, function(category){
      return category.id === id;
    });
  },
  all: function() {
    return categories;
  }
}