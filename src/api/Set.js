const resource = require('resource-router-middleware')

const { Set, Question } = require('../models')

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
    async create({ body }, res) {
        const { name, date } = body

        const questions = await Question.find({ group: 'Matematyka' })

        console.log(questions)

        try {
            await Set.create({ name, date, questions })
            res.status(201).json({ ...body })
        } catch (error) {
            console.log(error)
            res.status(503).end(error)
        }
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
