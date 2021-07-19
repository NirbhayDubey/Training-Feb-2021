const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    const rentals = await Rental.find().sort('-dateOut');
    res.send(rentals);
});

router.post('/', async(req, res) => {
    
})
