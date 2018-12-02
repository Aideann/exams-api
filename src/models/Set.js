const mongoose = require('mongoose')

const { Schema, model } = mongoose

const setSchema = new Schema({
    name: String,
    date: { type: Date, default: Date.now },
    questionsIds: [{ type: Schema.Types.ObjectId, ref: 'Question' }]
});

setSchema.index({ name: 1, date: 1 });

const Set = model('Set', setSchema);

module.exports = Set