var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
require('models/Dog')
const Dog = mongoose.model('dogs')

/* GET home page. */
router.get('/', async function(req, res) {
  const filter = {};
  const dogs = await Dog.find();
  res.render('index', { title: 'DogHouse', dogs: dogs });
});

/* GET new dog form page. */
router.get('/newdog', async function(req, res) {
  res.render('newdog', { title: 'New Dog Form' });
});

/* POST a new dog form submission */
router.post('/', async (req, res) => {
  console.log(req.body);  
  
  const myDog = new Dog({
    name: req.body.name,
    gender: req.body.gender,
    breed: req.body.breed,
    age: req.body.age,
    treat: req.body.treat
  });
  myDog.save()
    .then( () => console.log('Document saved.') )
    // .then( () => { res.render('index', { title: 'Form posted' }); })
    .then( () => { res.redirect('/') })
    .catch( err => console.log(err) );
});

module.exports = router;
