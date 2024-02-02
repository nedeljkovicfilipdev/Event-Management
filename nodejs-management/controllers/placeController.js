const AsyncHandler = require("express-async-handler");

const mongoose = require('mongoose')

//GET all places
const getAllPlaces = AsyncHandler( async(req, res) => {

})
//GET place by USER
const getPlace = AsyncHandler( async(req, res) =>{

})
//ADD place by USER
const addPlace = AsyncHandler( async(req, res) =>{
    
})
//UPDATE place by USER
const updatePlace = AsyncHandler( async(req, res) =>{
    
})
//DELETE place by USER
const deletePlace = AsyncHandler( async(req, res) =>{
    
})

module.exports = {
    getAllPlaces,
    getPlace,
    addPlace,
    updatePlace,
    deletePlace
}
