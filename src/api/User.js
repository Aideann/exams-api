const resource = require('resource-router-middleware')

const { User } = require('../models')

module.exports = ({ config, db }) => resource({
    mergeParams: true,

    id: 'user',

    /** GET / - List all entities */
    async list(req, res) {
        const users = await User
            .find({}, { _id: false, __v: false })

        res.status(200).json({ users })
    },

    /** POST / - Create a new entity */
    async create({ body }, res) {
        const { name, lastName, email, type } = body

        try {
            await User.create({ name, lastName, email, type })
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
