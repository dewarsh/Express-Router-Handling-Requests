const express = require('express')
const members = require('./members')
const app = express()

// app.get('/', (req, res) => {
//     console.log('Demo on handling http requests for URL /api/members')
// })

// Members API routes
app.use('/api/members', require('./routes/api/membersData'))

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port ${port}...`))