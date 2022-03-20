var express = require('express');
var router = express.Router();

const getUsersClass = require("../db/controllers/users/read.usersController.js");
const getTypeBooksClass = require("../db/controllers/booksType/read.booksTypeController.js");
const getBooksClass = require("../db/controllers/books/read.booksController.js");
const postUsersClass = require("../db/controllers/users/create.usersController.js");


/* GET home page. */
router.get('/users', getUsersClass.service);
router.post('/users', postUsersClass.service);


router.put('/users', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.delete('/users', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/books/type', getTypeBooksClass.service);
router.get('/books', getBooksClass.service);
router.post('/books', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.put('/books', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.delete('/books', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/transactions', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
