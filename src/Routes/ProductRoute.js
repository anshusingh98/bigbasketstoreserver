const express = require('express');
const { getAllProduct, createProduct, getfilteredProduct } = require('../Controller/ProductController');

const router = express.Router();

//  router.route("/products").get(getAllProduct);
router.route("/createProduct").post(createProduct);
router.route("/products/:category").get(getfilteredProduct);



module.exports = router