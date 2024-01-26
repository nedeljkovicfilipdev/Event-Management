const User = require('../models/UserModel')
const mongoose = require('mongoose')

//GET user
const getAllUsers = async (req, res) => {

    const users = await User.find({}).sort({createdAt: -1})

    res.status(200).json(users)

}
//GET single user
const retrieveUser = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such user'})
    }

    const user = await User.findById(id)

    if(!user) {
        return res.status(404).json({error: 'There is no user with that id'})
    }

    res.status(200).json(user)

}

//CREATE user

const addUser = async (req, res) => {
    
    const { name, username, password, email, age} = req.body

    try{
        const user = await User.create({name, username, password, email, age})
        res.status(200).json(user)
    }catch(error) {
        res.status(400).json(error)
    }

}

//DELETE user
const deleteUser = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such user'})
    }

    const user = await User.findOneAndDelete({_id: id})

    if(!user) {
        return res.status(404).json({error: 'There is no user with that id'})
    }

    res.status(200).json(user)

}
//UPDATE user
const updateUser = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such user'})
    }

    const user = await User.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!user) {
        return res.status(404).json({error: 'There is no user with that id'})
    }

    res.status(200).json(user)
}

module.exports = {
    getAllUsers,
    retrieveUser,
    addUser,
    deleteUser,
    updateUser
}