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
    create(req, res) {

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
