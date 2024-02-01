const express = require("express")
const {
    getUsers,
    getUser,
    loginUser,
    addUser,
    deleteUser,
    updateUser,
} = require('../controllers/userController')
 
const router = express.Router()

router.get("/getUsers", getUsers)

router.post("/login", loginUser)

router.post("/addUser", addUser)

router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser)

module.exports = router