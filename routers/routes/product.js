const express = require("express")
const {createNewProduct, getAllProduct, getOneProdect, updateProduct, deleteProduct, dressProduct, shoesProduct, topProduct, bottomProduct, getlastProduct} = require("./../controllers/product.js")
const productRouter = express.Router()


productRouter.post("/product", createNewProduct)
productRouter.get("/allProduct", getAllProduct)
productRouter.get("/product", getOneProdect)
productRouter.put("/updateProduct/:id", updateProduct)
productRouter.delete("/deleteProduct/:id", deleteProduct)
// productRouter.get("/productCat",catgoProduct);
productRouter.get("/categ/dress", dressProduct)
productRouter.get("/categ/shoes", shoesProduct)
productRouter.get("/categ/tops", topProduct)
productRouter.get("/categ/BottomClothes", bottomProduct)
productRouter.get("/categ/dress", dressProduct)
productRouter.get("/lastproduct", getlastProduct)








module.exports = productRouter;
