const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    isDel: { type: Boolean, default: false },
    // isAdmin: { type: Boolean, default: false },
    // typeofUser: {type:mongoose.Schema.Types.ObjectId,ref:"Role",default:""},
    phoneNumber: [{ type: Number}],
    role: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Role",
        default: "619a6c5c61fa88feb8aff20d",

    }
  });

  module.exports = mongoose.model("Users", userSchema);