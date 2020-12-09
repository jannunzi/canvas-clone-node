const mongoose = require("mongoose")
const modulesSchema = mongoose.Schema({
  title: {type: String, require: true, default: "New Modules"},
  description: String,
  course: {type: mongoose.Schema.Types.ObjectId, ref: "CourseModel"}
}, {collection: "modules"})
module.exports = modulesSchema
