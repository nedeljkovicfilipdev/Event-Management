const express = require("express")
const {
    getAllUsers,
    retrieveUser,
    loginUser,
    addUser,
    deleteUser,
    updateUser,
} = require('../controllers/userController')

const router = express.Router()

router.get("/getAll", getAllUsers)

router.get("/:id", retrieveUser)

router.post("/login", loginUser)

router.post("/addUser", addUser)

router.delete("/:id", deleteUser)

router.patch('/:id', updateUser)

module.exports = router