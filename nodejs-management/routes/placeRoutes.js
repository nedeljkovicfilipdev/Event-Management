const express = require("express")
const {
    getAllPlaces,
    getPlaces,
    addPlace,
    updatePlace,
    deletePlace,
} = require('../controllers/placeController')

const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

router.get('/all', getAllPlaces)

router.get('/ofUser', protect, getPlaces)

router.post('/add', protect, addPlace)

router.route("/:id").patch(protect, updatePlace).delete(protect, deletePlace)

module.exports = router