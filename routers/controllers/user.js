const userModel = require("./../../db/models/userSchema.js");


const createUser = (req, res) =>{
    const { userName, email, password, phoneNumber , isDel,cart} = req.body;
      const newUser = new userModel({
        userName, 
        email,
        password,
        phoneNumber,
        // isAdmin,
        isDel,
        cart
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
        const {id} = req.body
            userModel
              .findOne({_id : id })
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


    const updateUser = (req, res) => {     
        const { id } = req.params;  
        const { userName, password, email} = req.body;   
        userModel
        .findByIdAndUpdate({_id: id},{userName: userName, password: password, email: email})
        .then(() => {
            res.json("Updated")
        })
        .catch((err) => {
            res.send(err);
        })
    }


    const deleteuser = (req, res) => {
        const { id } = req.params;
        userModel
        .remove({_id: id})
        .then(() => {
            res.json("User Deleted")
        })
        .catch((err) => {
            res.send(err);
        })
    }


    const UserCart = (req, res) => {
      const { email, id } = req.params;
      userModel
        .findOneAndUpdate(
          { email: email },
          { $push: { cart: id } },
          { new: true }).exec()
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          console.log("err", err);

          res.status(400).send(err);
        });
    };


    const getAllCart = (req, res) => {
      const { email } = req.params;
      userModel
        .findOne({ email : email })
        .populate("cart")
        .exec()
        .then((result) => {
          res.send(result.cart);
        })
        .catch((err) => {
          console.log(err)
          
          res.status(400).send(err);
        });
    };


    const removeFromCart = (req, res) => {
      const { email, id } = req.params;
      userModel
        .findOneAndUpdate(
          { email: email },
          { $pull: { cart: id } },
          { new: true }
        )
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          console.log("err", err);
          res.status(400).send(err);
        });
    };
    
    

    module.exports = {createUser, getUser, getAllUsers, updateUser, deleteuser, UserCart, getAllCart, removeFromCart}