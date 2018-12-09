const resource = require('resource-router-middleware')

const { Exam } = require('../models')

module.exports = ({ config, db }) => resource({
    mergeParams: true,

    id: 'creator',

    /** GET / - List all entities */
    async list(req, res) {
        const exams = await Exam
            .find({}, { _id: false, __v: false })
            .populate({
                path: 'sets',
                populate: { path: 'questions' }
            })

        res.status(200).json({ exams })
    },

    /** POST / - Create a new entity */
    create(req, res) {

    },

    /** GET /:id - Return a given entity */
    async read({ params }, res) {
        const exam = await Exam
            .findOne({ creator: params.creator }, {
                _id: false,
                __v: false
            })
            .populate({
                path: 'sets',
                populate: { path: 'questions' }
            })
            .populate('participants')

        res.status(200).json({ exam })
    },

    /** PUT /:id - Update a given entity */
    update(req, res) {
    },

    /** DELETE /:id - Delete a given entity */
    delete(req, res) {
    }
})
