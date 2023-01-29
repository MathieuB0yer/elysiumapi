const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndIsadmin,
  verifyTokenAndIssuperAdmin,
} = require("../middlewares/jwtVerify.js"); //sep

const express = require("express");
const router = express.Router();

let {
  getCats,

  deleteCat,
  getOneCat,
  newCat,
  editCat,
} = require("../controller/category.js");

router.delete("/category/:id", deleteCat);
router.get("/category/:id", getOneCat);

router.post("/newcategory", newCat);
router.put("/editcategory/:id", editCat);
router.get("/categories", getCats);

exports.category = router;
