const {Schema, model} = require('mongoose')

const animalSchema = new Schema({
    name: String,
    species: String,
    image: String,
    reservedForAdoption: { type: Boolean, default: false },
    user: { type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = model('Animal', animalSchema)