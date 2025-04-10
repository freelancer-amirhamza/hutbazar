const express = require("express");
const router = express.Router();
const { addProduct, getProduct, getProductByCategory, getProductByCategoryAndSubCategory, getProductDetails } = require("../controllers/product-controllers.js");
const auth = require("../middleware/auth.js");

router.post("/create", auth, addProduct);
router.post("/get", getProduct);
router.post("/get-product-by-category", getProductByCategory);
router.post("/get-product-by-category-and-sub-category", getProductByCategoryAndSubCategory);
router.post("/get-product-details", getProductDetails);



module.exports = router;