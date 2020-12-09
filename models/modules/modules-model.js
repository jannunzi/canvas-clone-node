const mongoose = require("mongoose")
const modulesSchema = require("./modules-schema")
const modulesModel = mongoose.model("ModulesModel", modulesSchema)

const findAllModules = () =>
  modulesModel.find()

const findModuleById = (mid) =>
  modulesModel.findById(mid)

const findModulesForCourse = (cid) =>
  modulesModel.find({course: cid})

const createModuleForCourse = (cid, module) =>
  modulesModel.create({...module, course: cid})

const deleteModule = (mid) =>
  modulesModel.remove({_id: mid})

const updateModule = (mid, module) =>
  modulesModel.update({_id: mid}, {$set: module})

module.exports = {
  findModuleById, findAllModules, findModulesForCourse,
  createModuleForCourse, deleteModule, updateModule
}
