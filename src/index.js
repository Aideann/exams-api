const http = require('http')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const middleware = require('./middleware')
const api = require('./api')
const config = require('./config.json')

const app = express()

// Create server
app.server = http.createServer(app)

// Logger
app.use(morgan('dev'))

// Set up CORS
app.use(cors({
    exposedHeaders: config.corsHeaders
}))

// Set up body-parser
app.use(bodyParser.json({
    limit: config.bodyLimit
}))

// Connect to DB
mongoose.connect('mongodb://localhost:27017/tester', {
        useNewUrlParser: true,
        autoIndex: false
    })
    .then((db) => {
        console.log('Connected to DB')

        app.use(middleware({ config, db }))
        app.use('/api', api({ config, db }))
    })
    .catch((error) => {
        console.log('Problem with DB connection', error)
    })

app.server.listen(process.env.PORT || config.port, () => {
    console.log(`Started on port ${app.server.address().port}`)
})