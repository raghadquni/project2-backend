const express = require("express")
const {createNewProduct, getAllProduct, getOneProdect, updateProduct, deleteProduct} = require("./../controllers/product.js")
const productRouter = express.Router()


productRouter.post("/product", createNewProduct)
productRouter.get("/allProduct", getAllProduct)
productRouter.get("/product", getOneProdect)
productRouter.put("/updateProduct/:id", updateProduct)
productRouter.delete("/deleteProduct/:id", deleteProduct)






module.exports = productRouter;
