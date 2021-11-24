const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      }],
      amount: { type: Number, required: true },
      address: { type : Object , required: true },
      status: { type:String, default: "pending"},

  });

module.exports = mongoose.model("Cart", CartSchema);