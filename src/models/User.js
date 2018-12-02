const mongoose = require('mongoose')

const { Schema, model } = mongoose

const userSchema = new Schema({
    name: String,
    lastName: String,
    email: String,
    type: { type: String, enum: ['user', 'admin'] },
})

userSchema.index({ name: 1, email: 1 })

const User = model('User', userSchema)

module.exports = User