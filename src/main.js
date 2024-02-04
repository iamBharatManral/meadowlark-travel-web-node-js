const express = require('express');
const { engine } = require('express-handlebars');
const { join } = require('path');
const {
  home, about, notFound, serverError,
} = require('./lib/handlers');

const app = express();
const PORT = process.env.PORT || 4000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', join(__dirname, 'views'));

app.use(express.static(join(__dirname, 'public')));

app.get('/', home);

app.get('/about', about);

app.use(notFound);

app.use(serverError);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is listening on http:://localhost:${PORT}; press Ctrl-C to terminate.`);
  });
} else {
  module.exports = app;
}
