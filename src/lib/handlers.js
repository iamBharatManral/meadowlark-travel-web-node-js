const { getFortune } = require('./fortune');

const home = (req, res) => res.render('home');

const about = (req, res) => res.render('about', { fortune: getFortune() });

const notFound = (req, res) => res.render('404');

// Express recognizes the error handler by way of its four
// arguments, so we have to disable ESLint's no-unused-vars rule
/* eslint-disable no-unused-vars */
const serverError = (err, req, res, next) => res.render('500');
/* eslint-disable no-unused-vars */

module.exports = {
  home,
  about,
  notFound,
  serverError,
};
