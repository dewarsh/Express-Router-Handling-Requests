const express = require('express')
const members = require('./members')
const app = express()

// app.get('/', (req, res) => {
//     console.log('Demo on handling http requests for URL /api/members')
// })

// Get All Members
app.get('/api/members', (req, res) => {
    res.json(members)
})

// Get Single Member
app.get('/api/members/:id', (req, res) => {
    // checking if the data is present
    const foundData = members.some(member => member.id === parseInt(req.params.id))
    if(foundData) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}`})
    }
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port ${port}...`))