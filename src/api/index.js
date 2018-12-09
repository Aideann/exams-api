const express = require('express')

const User = require('./User')
const Exam = require('./Exam')
const Set = require('./Set')
const Question = require('./Question')

const { Router } = express

module.exports = ({ config, db }) => {
    const api = Router()

    api.use('/users', User({ config, db }))
    api.use('/exams', Exam({ config, db }))
    api.use('/sets', Set({ config, db }))
    api.use('/questions', Question({ config, db }))

    return api
}
