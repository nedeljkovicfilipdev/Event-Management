const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    name: String,
    city: String,
    country: String,
    
},{
    timestamps: true,
})