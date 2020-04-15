const mongoose = require('mongoose')
const Schema = mongoose.Schema

const makerSchema = new Schema({
  name: String
}, {
  timestamps: true
})

const Maker = mongoose.model("Maker", makerSchema)
module.exports = Maker