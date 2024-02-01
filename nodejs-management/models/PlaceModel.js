const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: String,
    city: String,
    country: String,
    
})