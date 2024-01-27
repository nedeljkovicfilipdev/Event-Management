require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/UserRoutes')

//express app
const app = express()

//middleware

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next()
})

//router
app.use("/users", userRoutes)

//connect to db

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
    console.log('Connected & Listening on port:', process.env.PORT)
})
})
.catch((error) => {
    console.log(error)
})


// Env to be hidden
process.env