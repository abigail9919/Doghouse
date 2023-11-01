var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
require('models/Dog')
const Dog = mongoose.model('dogs')

/* GET home page. */
router.get('/', async function(req, res) {
  const filter = {};
  const dogs = await Dog.find();
  console.log(dogs);
  res.render('index', { title: 'DogHouse', dogs: dogs });
});

module.exports = router;
