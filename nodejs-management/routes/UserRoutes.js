const express = require("express")
const {
    getUsers,
    getUser,
    loginUser,
    registerUser,
    deleteUser,
    updateUser,
} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')
 
const router = express.Router()

router.get("/getUsers", getUsers)

router.post("/login", loginUser)

router.post("/registerUser", registerUser)

router.get("/user", protect, getUser)

router.route('/:id').patch(updateUser).delete(deleteUser)

module.exports = router