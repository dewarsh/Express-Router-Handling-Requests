const express = require('express')
const router = express.Router()
const members = require('../../members')

// Get All Members
router.get('/', (req, res) => {
    res.json(members)
})

// Get Single Member
router.get('/:id', (req, res) => {
    // checking if the data is present
    const foundData = members.some(member => member.id === parseInt(req.params.id))
    if(foundData) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}`})
    }
})

module.exports = router