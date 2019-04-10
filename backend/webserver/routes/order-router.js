'use strict';

const express = require('express');
const makeOrder = require('../controllers/order/make-order');

const orderRouter = express.Router();

// async function name(params) {

// }
orderRouter.post('/order', makeOrder);
orderRouter.get('/order', makeOrder);

module.exports = orderRouter;