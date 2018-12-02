const express = require('express')

const User = require('./User')

const { Router } = express

module.exports = ({ config, db }) => {
    const api = Router()

    api.use('/users', User({config, db}))

    return api
}
