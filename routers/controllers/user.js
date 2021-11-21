const userModel = require("./../../db/models/userSchema.js");


const createUser = (req, res) =>{
    const { userName, email, password, phoneNumber, isAdmin , isDeleted} = req.body;
      const newUser = new userModel({
        userName, 
        email,
        password,
        phoneNumber,
        isAdmin,
        isDeleted
      });
      newUser 
        .save()
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          res.send(err);
        });
    };

    const getUser = (req, res) =>{
        const {userName} = req.body
            userModel
              .findOne({userName : userName })
              .then((result) => {
                res.send(result);
              })
              .catch((err) => {
                res.send(err);
              });
          };

    const getAllUsers = (req, res) =>{
        userModel
        .find({})
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          res.send(err);
        });
    };


    // const deleteuser = (req, res) => {
    //             const { userName } = req.params;
    //                 let index = 0;
    //                 try {
    //                   const found = userModel.find((item, i) => {
    //                     index = i;
    //                     return item.userName == userName;
    //                   });
                  
    //                   if (found) {
    //                     if (found.isDel) {
    //                       res.status(404).json("is deleted");
    //                     } else {
    //                         userModel[index].isDel = true;
    //                       res.status(200).json(userModel);
    //                     }
    //                   } else res.status(400).json("not found");
    //                 } catch (error) {
    //                   res.status(400).json(error);
    //                 }
    //               };
          
    

    module.exports = {createUser, getUser, getAllUsers}