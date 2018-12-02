const mongoose = require('mongoose')

const { Schema, model } = mongoose

const examSchema = new Schema({
    date: Date,
    creator: String,
    setsIds: [{ type: Schema.Types.ObjectId, ref: 'Set' }],
    participants: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

examSchema.index({ date: 1, creator: 1 });

const Exam = model('Exam', examSchema);

module.exports = Exam