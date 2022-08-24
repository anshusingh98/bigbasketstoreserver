const express = require('express');
const { getAllProduct, createProduct, getfilteredProduct } = require('../Controller/ProductController');

const router = express.Router();
//Routes
router.route("/createProduct").post(createProduct);
router.route("/products/:category").get(getfilteredProduct);



module.exports = router