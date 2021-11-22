const productModel = require("./../../db/models/productSchema");


const createNewProduct = (req, res) =>{
    const { productName, description, productImg, categories, size , color, price} = req.body;
      const newProduct = new productModel({
        productName, 
        description,
        productImg,
        categories,
        size,
        color,
        price
      });
      newProduct
        .save()
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          res.send(err);
        });
    };


    const getAllProduct = (req, res) =>{
        productModel
        .find({})
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          res.send(err);
        });
    };



    const getOneProdect = (req, res) =>{
        const {id} = req.body
        productModel
              .findOne({_id : id })
              .then((result) => {
                res.send(result);
              })
              .catch((err) => {
                res.send(err);
              });
          };


        //   const catgoProduct = (req, res) => {
        //     const {categories}=req.body;
        //     productModel
        //       .find({categories:categories})
        //       .then((result) => {
        //         res.send(result);
        //       })
        //       .catch((err) => {
        //         res.send(err);
        //       });
        //   };

    const updateProduct = (req, res) => {     
            const { id } = req.params;  
            const { productName, description, productImg, categories, size, color, price} = req.body;   
            productModel
            .findByIdAndUpdate({_id: id},{productName: productName, description: description, productImg: productImg, categories: categories, size: size, color: color, price: price})
            .then(() => {
                res.json("Updated")
            })
            .catch((err) => {
                res.send(err);
            })
        }


    const deleteProduct = (req, res) => {
            const { id } = req.params;
            productModel
            .remove({_id: id})
            .then(() => {
                res.json("Product Deleted")
            })
            .catch((err) => {
                res.send(err);
            })
        }

    module.exports = {createNewProduct, getAllProduct, getOneProdect, updateProduct, deleteProduct}