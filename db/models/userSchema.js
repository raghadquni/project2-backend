const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    isDel: { type: Boolean, default: false },
    phoneNumber: [{ type: Number}],
    
  });

  module.exports = mongoose.model("Users", userSchema);