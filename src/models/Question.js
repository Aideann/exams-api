const mongoose = require('mongoose')

const { Schema, model } = mongoose

const questionSchema = new Schema({
    content: String,
    type: { type: String, enum: ['single', 'multiple', 'open'] },
    answers: [{ type: Schema.Types.Mixed }],
    correctAnswer: [{ type: String }],
    group: String
})

questionSchema.index({ group: 1 })

const Question = model('Question', questionSchema)

module.exports = Question