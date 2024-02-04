const AsyncHandler = require("express-async-handler");
const Place = require('../models/placeModel')
const User = require('../models/userModel')

const mongoose = require('mongoose')

//GET all places
const getAllPlaces = AsyncHandler( async(req, res) => {
    console.log("Show all places")
    const places = await Place.find()

    res.status(200).json({message: 'Show all places',places})
})
//GET places of USER
const getPlaces = AsyncHandler( async(req, res) =>{
    const places = await Place.find({user: req.user.id})
    console.log("GET places of USER")
    res.status(200).json(places)
})
//ADD place by USER
const addPlace = AsyncHandler( async(req, res) =>{
    const {name, type ,city, country} = req.body
    const user = req.user.id

    if(!name || !city || !country){
        res.status(400)
        throw new Error("Please add all mandatory fields")
    }
    const placeExists = await Place.findOne({name, type, city, country})
    if(placeExists){
        res.status(400)
        throw new Error("Inserted location already exists")
    }
    try{
    const place = await Place.create({name, type, city, country, user})
    if(place){
        res.status(200).json(place)
    }
    }catch(err){

    }
    console.log("ADD place by USER")
    res.status(200).json("Location added.")
})
//UPDATE place by USER
const updatePlace = AsyncHandler( async(req, res) =>{
    const {id} = req.params
    const place = await Place.findById(req.params.id)

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such location.'})
    }

    //Find place
    if(!place) {
        res.status(400)
        throw new Error("Location not found")
    }

    //Find user
    const user = await User.findById(req.user.id)

    //Check user
    if(!user){
        res.status(401)
        throw new Error("User not found")
    }

    //Check if logged in user is doing updates
    if(place.user.toString() !== user.id){
        res.status(401)
        throw new Error("User not authorized")
    }

    const updatedPlace = await Place.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if(!place){
        res.status(400)
        throw new Error("Place to be updated doesn't exist")
    }

    console.log("UPDATE place by USER")
    res.status(200).json(updatedPlace)
})
//DELETE place by USER
const deletePlace = AsyncHandler( async(req, res) =>{
    const {id} = req.params
    const place = await Place.findById(req.params.id)

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such location.'})
    }

    if(!place){
        res.status(400)
        throw new Error("No such location.")
    }

    const user = await User.findById(req.user.id)

    if(!user){
        res.status(400)
        throw new Error("User not found.")
    }

    if(place.user.toString() !== user.id){
        res.status(401)
        throw new Error("User not authorized.")
    }

    const deletedPlace = await Place.findOneAndDelete({_id: id})

    if(!place){
        res.status(400)
        throw new Error("Place to be deleted doesn't exist")
    }

    res.status(200).json(deletedPlace)
})

module.exports = {
    getAllPlaces,
    getPlaces,
    addPlace,
    updatePlace,
    deletePlace
}
