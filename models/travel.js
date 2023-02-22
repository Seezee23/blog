const { Schema, model } = require('mongoose')

const travelSchema = new Schema({
    title: { type: String, required: true },
    image: String,
    attractions: String,
    category: String,
}, {
    timestamps: true
})


module.exports = model('Travel', travelSchema)