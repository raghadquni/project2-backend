const roleModel = require("./../../db/models/roleSchema.js");



const createRole = (req, res) => {
    const { typeofUser, Permissions } = req.body;

      const newRole = new roleModel({
        typeofUser, 
        Permissions
      });
      newRole 
        .save()
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          res.send(err);
        });
    };


    const getAllRoles = (req, res) =>{
        roleModel
        .find({})
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          res.send(err);
        });
    };
    
    module.exports = { createRole, getAllRoles }