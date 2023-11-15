const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('models/Dog')
const Dog = mongoose.model('dogs')

// get all dogs
router.get('/', async function(req, res) {
    // res.send('Hi')
    const dogs = await Dog.find();
    res.json(dogs);
});

// get specific number of dogs
router.get('/limit/:limit', async function(req, res) {
    const limit = parseInt(req.params.limit);
    const dogs = await Dog.find().limit(limit);
    res.json(dogs);
});

// get dogs by name
router.get('/name/:name', async function(req, res) {
    const name = req.params.name;
    // Assuming the 'name' field in your Dog schema is case-sensitive
    const dogs = await Dog.find({ name: name });
    res.json(dogs);
});

// get unique breeds
router.get('/unique-breeds', async function(req, res) {
    const uniqueBreeds = await Dog.distinct('breed');
    res.json(uniqueBreeds);
});

// get unique treats
router.get('/unique-treats', async function(req, res) {
    const uniqueTreats = await Dog.distinct('treat');
    res.json(uniqueTreats);
});

// get dogs by age
router.get('/age/:age', async function(req, res) {
    const age = parseInt(req.params.age);
    const dogs = await Dog.find({ age: age });
    res.json(dogs);
});

// get dogs younger than or equal to a provided age
router.get('/age/younger-than/:age', async function(req, res) {
    const age = parseInt(req.params.age);
    const dogs = await Dog.find({ age: { $lte: age } });
    res.json(dogs);
});

// get dogs older than or equal to a provided age
router.get('/age/older-than/:age', async function(req, res) {
    const age = parseInt(req.params.age);
    const dogs = await Dog.find({ age: { $gte: age } });
    res.json(dogs);
});

// get dogs by breed
router.get('/breed/:breed', async function(req, res) {
    const breed = req.params.breed;
    const dogs = await Dog.find({ breed: breed });
    res.json(dogs);
});

// get dogs by treat
router.get('/like-treat/:treat', async function(req, res) {
    const treat = req.params.treat;
    const dogs = await Dog.find({ treat: treat });
    res.json(dogs);
});

module.exports = router;