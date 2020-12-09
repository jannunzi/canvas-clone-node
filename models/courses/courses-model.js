const mongoose = require("mongoose")
const coursesSchema = require("./courses-schema")
const coursesModel = mongoose.model("CoursesModel", coursesSchema)

const findAllCourses = () =>
  coursesModel.find()

const findCourseById = (cid) =>
  coursesModel.findById(cid)

const updateCourse = (cid, course) =>
  coursesModel.update({_id: cid}, {$set: course})

module.exports = {
  findCourseById, findAllCourses,
  updateCourse
}
