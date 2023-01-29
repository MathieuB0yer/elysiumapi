const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndIsadmin,
  verifyTokenAndIssuperAdmin,
} = require("../middlewares/jwtVerify.js"); //sep

const express = require("express");
const router = express.Router();

let {
  getproduct,
  postproduct,
  updateproduct,
  deleteproduct,
  getOneproduct,
  newproduct,
  editproduct,
  getproducts,
} = require("../controller/product.js");

router.delete("/product/:id", deleteproduct);
router.get("/product/:id", getOneproduct);

router.post("/newproduct", newproduct);
router.put("/editproduct/:id", editproduct);
router.get("/getproducts", getproducts);

exports.product = router;
