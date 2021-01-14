const express = require('express');
const router = express.Router();

router.get('/movies', (req, res) =>{
    res.render('leaveit/movies', {movies: ['300', 'the notebook']});
});
router.get('/products', (req, res) =>{
    res.render('leaveit/products', {products: ['Coke products', 'Fake chocolate']});
});

module.exports = router;