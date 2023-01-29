
const product = require('../model/product')

let util = require('util')
const exec = util.promisify(require("child_process").exec);
  
exports.getOneproduct = async(req, res) => {
    try {
        let foundproduct = await product.findById(req.params.id);
        res.json(foundproduct);
      } catch {
        res.status(409).json("There was an error please try again later");
      }
  };

  exports.deleteproduct = async(req, res) => {
    try {
        let deletedproduct = await product.findByIdAndDelete(req.params.id);
        res.json(deletedproduct);
      } catch {
        res.status(409).json("There was an error please try again later");
      }
  };

        exports.newproduct = async(req , res)=>{
          try {
            if (req.files) {
              let filenames = [];
        
              req.files.forEach((file) => {
                filenames.push(file.filename);
              });
        
              req.body.pictures = filenames;
            }
            let productDraft = new product(req.body);
        
            let postedproduct = await productDraft.save();
        
            res.json(postedproduct);
          } catch {
            res.status(409).json("There was an error please try again later");
          }
  }
exports.editproduct = async(req , res)=>{
          try {
            let oldProduct = await product.findById(req.params.id);
        
            if (req.files) {
              if (req.files[0]) {
                // let { stdout, stderr } = await exec("ls", { cwd: "./uploads" })
        
                for (let pic of oldProduct.pictures) {
                  if (pic != "basic.png") {
                    await exec("rm " + pic, { cwd: "./uploads" });
                  }
                }
        
                let pics = [];
        
                req.files.forEach((file) => {
                  pics.push(file.filename);
                });
        
                req.body.pictures = pics;
              } else {
                req.body.pictures = oldProduct.pictures;
              }
            }
        
            let updatedproduct = await product.findByIdAndUpdate(
              req.params.id,
              req.body,
              { new: true }
            );
        
            res.json(updatedproduct);
          } catch (err) {
            console.log(err);
        
            res.status(409).json("There was an error please try again later");
        
            res.json(foundproduct);
          }
          
        }
exports.getproducts = async(req , res)=>{
          try {
            if (req.query.category) {
              console.log(req.query);
              let foundproduct = await product
                .find({
                  categories: { $in: req.query.category },
                })
                .populate("categories");
              res.json(foundproduct);
            } else {
              let foundproduct = await product.find().populate("categories");
              res.json(foundproduct);
            }
          } catch (err) {
            console.log(err);
            res.status(409).json("There was an error please try again later");
          }
        }

        