var express = require('express');
var app = express();

require('./expressConfig')(app, express);

app.get('/', function(req, res){
  res.sendfile('index.html', {root: app.settings.views});
});

require('./routes/user')(app);
require('./routes/movie')(app);
require('./routes/category')(app);

module.exports = app;