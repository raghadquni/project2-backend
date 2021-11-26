const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    description: { type: String, required: true },
    productImg: { type: String, required: true , unique: true},
    categories: { type: String, required: true},
    size: [{ type: String, required: true}],
    color: { type: String, required: true},
    price: { type: Number, required: true},

  });

  module.exports = mongoose.model("Products", productSchema);