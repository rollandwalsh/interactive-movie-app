var bodyParser = require('body-parser');

module.exports = function(app, express) {
  // Use Express for quick app load
  app.use("/", express.static("app/"));

  app.set('views', __dirname + '/../app/views');

  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(bodyParser.json());
}
