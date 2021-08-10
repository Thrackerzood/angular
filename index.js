const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5500


app.use(bodyParser.json())
app.listen(PORT, (err) => {
    console.log('server work')
})
//static
app.use(express.static(path.join(__dirname, 'public')))
// home page
app.use('/api/home', require('./components/home'))
// /chat
app.use('/api/chat', require('./components/chat'))
// /user
app.use('/api/user', require('./components/user'))
// /user/:id
app.use('/api/user', require('./components/userId'))
// /random
app.use('/api/random', require('./components/random'))
// /registration
app.use('/api/registration', require('./components/registration'))
// /authentication
app.use('/api/authentication', require('./components/authentication'))
// /404 page
app.use('*', require('./components/404.js'))