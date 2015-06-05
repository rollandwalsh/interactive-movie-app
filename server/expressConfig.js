var bodyParser = require('body-parser');

module.exports = function(app, express) {
  // Use Express for quick app purposes
  app.use("/", express.static("app/"));

  // Set the view directory
  app.set('views', __dirname + '/../app/views');

  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(bodyParser.json());
}
