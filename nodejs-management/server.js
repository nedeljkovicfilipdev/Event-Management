require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const { errorHandler } = require('./middleware/errorMiddleware')

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
}

//express app
const app = express()

//middleware

app.use(express.json())

app.use(cors(corsOptions))

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(errorHandler)

//router
app.use("/users", userRoutes)

//connect to db

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //listen for requests
    app.listen(process.env.PORT || 4000, () => {
    console.log('Connected & Listening on port:', process.env.PORT)
})
})
.catch((error) => {
    console.log(error)
})


// Env to be hidden
process.env