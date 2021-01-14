const express = require('express');
const router = express.Router();


router.get('/animals', (req, res) =>{
    res.render('loveit/animals', {animals: ['turtles', 'dogs']});
});

router.get('/foods', (req, res) =>{
    res.render('loveit/foods', {foods: ['chai', 'pasta']});
});

module.exports = router;