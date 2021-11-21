const mongoose = require("mongoose");


const roleSchema = new mongoose.Schema({
    typeofUser: { type: String, required: true, unique: true},
    Permissions: [{type: String, required: true}],
  });

  module.exports = mongoose.model("Role", roleSchema);