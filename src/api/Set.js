const resource = require('resource-router-middleware')

const { Set } = require('../models')

module.exports = ({ config, db }) => resource({
    mergeParams: true,
    id: 'set',

    /** GET / - List all entities */
    async list(req, res) {
        const sets = await Set
            .find({}, { _id: false, __v: false })
            .populate('questions')

        res.status(200).json({ sets })
    },

    /** POST / - Create a new entity */
    create(req, res) {

    },

    /** GET /:id - Return a given entity */
    async read({ params }, res) {
        const set = await Set.findOne({ name: params.set }, {
            _id: false,
            __v: false
        }).populate('questions')

        res.status(200).json({ set })
    },

    /** PUT /:id - Update a given entity */
    update(req, res) {
    },

    /** DELETE /:id - Delete a given entity */
    delete(req, res) {
    }
})
