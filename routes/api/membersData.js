const express = require('express')
const router = express.Router()
const members = require('../../members')
const uuid = require('uuid')
const Joi = require('joi')

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

// Creating a new member
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: "active"
    }

    const { error } = validateMember(req.body)

    if(!error) {
        members.push(newMember)
        res.json(members)
    } else {
        res.send(error.details[0].message)
    }
})

function validateMember(member) {
    const schema = {
        name: Joi.string().min(3).required(),
        email: Joi.string().email().required()
    }
    return Joi.validate(member, schema)
}

module.exports = router