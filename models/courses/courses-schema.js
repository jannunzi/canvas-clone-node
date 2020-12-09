const mongoose = require("mongoose")
const coursesSchema = mongoose.Schema({
  title: {type: String, require: true, default: "New Course"},
  longTitle: {type: String},
  description: String
}, {collection: "courses"})
module.exports = coursesSchema
