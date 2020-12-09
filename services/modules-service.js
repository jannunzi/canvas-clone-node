const modulesModel = require("../models/modules/modules-model")

const findAllModules = () =>
  modulesModel.findAllModules()

const findModuleById = (mid) =>
  modulesModel.findModuleById(mid)

const findModulesForCourse = (cid) =>
{
  console.log(cid)
  return modulesModel.findModulesForCourse(cid)
}

const createModuleForCourse = (cid, module) =>
  modulesModel.createModuleForCourse(cid, module)

const updateModule = (mid, module) =>
  modulesModel.updateModule(mid, module)

const deleteModule = (mid) =>
  modulesModel.deleteModule(mid)

module.exports = {
  findAllModules, findModuleById, findModulesForCourse,
  createModuleForCourse, deleteModule, updateModule
}
