const resource = require('resource-router-middleware')

const { Question } = require('../models')

module.exports = ({ config, db }) => resource({
    mergeParams: true,

    id: 'question',

    /** GET / - List all entities */
    async list(req, res) {
        const questions = await Question
            .find({}, { _id: false, __v: false })

        res.status(200).json({ questions })
    },

    /** POST / - Create a new entity */
    async create({ body }, res) {
        const { answers, correctAnswers, content, type, group } = body

        try {
            await Question.create({ answers, correctAnswers, content, type, group })
            res.status(201).json({ ...body })
        } catch (error) {
            console.log(error)
            res.status(503).end(error)
        }

    },

    /** GET /:id - Return a given entity */
    read(req, res) {

    },

    /** PUT /:id - Update a given entity */
    update(req, res) {
    },

    /** DELETE /:id - Delete a given entity */
    delete(req, res) {
    }
})
