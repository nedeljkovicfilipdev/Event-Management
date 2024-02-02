const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')

const mongoose = require('mongoose')

// Get users
// GET /users/getUsers
const getUsers = async (req, res) => {

    const users = await User.find({}).sort({createdAt: -1})

    res.status(200).json(users)

}
//GET single user
const getUser = async(req, res) => {
    /*
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such user'})
    }

    const user = await User.findById(id)

    if(!user) {
        return res.status(404).json({error: 'There is no user with that id'})
    }

    res.status(200).json(user)
    */
   const {_id, name, username, email, age} = await User.findById(req.user.id)
   res.status(200).json({
    id: _id,
    name, email
   })

}

//Login user

const loginUser = asyncHandler( async(req, res) => {
    const {username, password} = req.body

    try{
        //Check username
        const user = await User.findOne({username})
        //Check password
        if(user && (await bcrypt.compare(password, user.password))){
            res.json({
                _id: user.id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)
            })
        }else {
            res.status(400)
            throw new Error('Invalid credentials')
        }
    }catch(error){
        console.log("Error during login: ", error)
        res.status(500).json({message: 'Internal server error'})
    }
})

//REGISTER user

const registerUser =asyncHandler( async (req, res) => {
    
    const { name, username, password, email, age, phone} = req.body

    if(!name || !username || !password || !email){
        res.status(400)
        throw new Error('Please add all mandatory fields')
    }

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    //Hash

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    try{
        const user = await User.create({name, username, password: hashedPassword, email, age, phone})
        if(user){
            res.status(200).json({
                user: user,
                token: generateToken(user._id)
            })
        }else{
            res.status(400)
            throw new Error('Invalid user data')
        }
    }catch(error) {
        res.status(500).json(error)
    }

})

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

//GENERATE Token

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET,{
        expiresIn: '30d',
    })
}

module.exports = {
    getUsers,
    getUser,
    loginUser,
    registerUser,
    deleteUser,
    updateUser
}