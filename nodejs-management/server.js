require('dotenv').config()

const colors = require('colors')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const placeRoutes = require('./routes/placeRoutes')
const { errorHandler } = require('./middleware/errorMiddleware')
const { requestHandler } = require('./middleware/requestMiddleware')
const connectDB = require('./config/db')

const corsOptions = {
    origin: 'http://localhost:5000',
    credentials: true,
}

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors(corsOptions))

//Port
app.listen(process.env.PORT)

//middleware
app.use(requestHandler)
app.use(errorHandler)

//router
app.use("/users", userRoutes)
app.use("/places", placeRoutes)

// Env to be hidden
process.env