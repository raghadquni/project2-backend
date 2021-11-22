const express = require("express")
const {createNewProduct, getAllProduct, getOneProdect, updateProduct, deleteProduct, catgoProduct} = require("./../controllers/product.js")
const productRouter = express.Router()


productRouter.post("/product", createNewProduct)
productRouter.get("/allProduct", getAllProduct)
productRouter.get("/product", getOneProdect)
productRouter.put("/updateProduct/:id", updateProduct)
productRouter.delete("/deleteProduct/:id", deleteProduct)
// productRouter.get("/productCat",catgoProduct);



module.exports = productRouter;
