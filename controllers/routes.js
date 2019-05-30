const express = require('express');
const router = express.Router();
const pizza = require('../models/pizza');

router.get('/', function(req, res) {
    pizza.all(function(pizza_data){
        console.log(pizza_data);
        res.render('index',{pizza_data});

    })
});

module.exports = router;
// console.log(res.render)