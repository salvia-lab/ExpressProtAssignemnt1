var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});
/* GET about me page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About'});
});
/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});
/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});
/* GET contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});
router.post('/contact', (req, res, next) => {
  res.redirect('/');
});

module.exports = router;
