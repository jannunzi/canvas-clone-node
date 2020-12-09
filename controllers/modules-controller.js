const modulesService = require("../services/modules-service")

module.exports = (app) => {

  const findAllModules = (req, res) =>
    modulesService.findAllModules()
      .then(modules => res.json(modules))

  const findModuleById = (req, res) =>
    modulesService.findModuleById(req.params.mid)
      .then(module => res.json(module))

  const findModulesForCourse = (req, res) =>
    modulesService.findModulesForCourse(req.params.cid)
      .then(modules => {
        res.json(modules)
      })

  const createModuleForCourse = (req, res) =>
    modulesService.createModuleForCourse(req.params.cid, req.body)
      .then(module => res.json(module))

  const updateModule = (req, res) =>
    modulesService.updateModule(req.params.mid, req.body)
      .then(status => res.json(status))

  const deleteModule = (req, res) =>
    modulesService.deleteModule(req.params.mid)
      .then(status => res.json(status))

  app.get("/api/modules", findAllModules)
  app.get("/api/modules/:mid", findModuleById)
  app.get("/api/courses/:cid/modules", findModulesForCourse)
  app.post("/api/courses/:cid/modules", createModuleForCourse)
  app.put("/api/modules/:mid", updateModule)
  app.delete("/api/modules/:mid", deleteModule)

}
