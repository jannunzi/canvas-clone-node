const coursesModel = require("../models/courses/courses-model")

const findAllCourses = () =>
  coursesModel.findAllCourses()

const findCourseById = (cid) =>
  coursesModel.findCourseById(cid)

const updateCourse = (cid, course) =>
  coursesModel.updateCourse(cid, course)


module.exports = {
  findAllCourses, findCourseById,
  updateCourse
}
