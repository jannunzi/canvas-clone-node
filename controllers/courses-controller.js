const coursesService = require("../services/courses-service")

module.exports = (app) => {

  const findAllCourses = (req, res) =>
    coursesService.findAllCourses()
      .then(courses => res.json(courses))

  const findCourseById = (req, res) =>
    coursesService.findCourseById(req.params.cid)
      .then(course => res.json(course))

  const updateCourse = (req, res) =>
    coursesService.updateCourse(req.params.cid, req.body)
      .then(status => res.json(status))

  app.get("/api/courses", findAllCourses)
  app.get("/api/courses/:cid", findCourseById)
  app.put("/api/courses/:cid", updateCourse)
}
