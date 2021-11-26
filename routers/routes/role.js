const express = require("express")
const {createRole, getAllRoles} = require("./../controllers/role")

const roleRouter = express.Router()

roleRouter.post("/create", createRole)
roleRouter.get("/allRoles", getAllRoles)


module.exports = roleRouter;