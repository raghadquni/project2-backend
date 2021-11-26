const express = require("express")

const {createUser, getUser, getAllUsers, updateUser, deleteuser, UserCart, getAllCart, removeFromCart} = require("./../controllers/user.js")
const userRouter = express.Router()

userRouter.post("/user", createUser)
userRouter.get("/user", getUser)
userRouter.get("/allUser", getAllUsers)
userRouter.put("/user/:id", updateUser)
userRouter.delete("/user/:id", deleteuser)
userRouter.get("/cart/:email", getAllCart);
userRouter.put("/cart/:email/:id", UserCart);
userRouter.put("/remove/:email/:id", removeFromCart);


module.exports = userRouter;