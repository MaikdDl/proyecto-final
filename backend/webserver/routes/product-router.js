'use strict';

const express = require('express');
const getProducts = require('../controllers/product/get-products');

const productRouter = express.Router();

productRouter.get('/products', getProducts);

module.exports = productRouter;