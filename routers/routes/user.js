const express = require("express")
const {createUser, getUser, getAllUsers, updateUser, deleteuser} = require("./../controllers/user.js")
const userRouter = express.Router()

userRouter.post("/user", createUser)
userRouter.get("/user", getUser)
userRouter.get("/allUser", getAllUsers)
userRouter.put("/user/:id", updateUser)
userRouter.delete("/user/:id", deleteuser)






module.exports = userRouter;



