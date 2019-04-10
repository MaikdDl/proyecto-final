'use strict';

const express = require('express');
const getProducts = require('../controllers/product/get-products');
const getProductDetail = require('../controllers/product/get-product-detail');

const productRouter = express.Router();

productRouter.get('/products', getProducts);
productRouter.get('/products/:id_producto', getProductDetail);

module.exports = productRouter;