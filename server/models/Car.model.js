const mongoose = require('mongoose')
const Schema = mongoose.Schema

const carSchema = new Schema({
    manufacter: String,
    model: String,
    kilometers: Number,
    hp: Number,
    year: Number,
    color: String,
    price: Number,
    photos: Array,
    beFavorite: Number,
    address: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})

const Car = mongoose.model("Car", carSchema)
module.exports = Car