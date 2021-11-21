const express = require("express")
const {createUser, getUser, getAllUsers, } = require("./../controllers/user.js")
const userRouter = express.Router()

userRouter.post("/user", createUser)
userRouter.get("/user", getUser)
userRouter.get("/allUser", getAllUsers)
// userRouter.delete("/delUser", deleteuser)




module.exports = userRouter;



