'use strict';

const express = require('express');
const checkJwtToken = require('../controllers/session/check-jwt-token');
const makeOrder = require('../controllers/order/make-order');
const showUserOrders = require('../controllers/order/show-user-orders');

const orderRouter = express.Router();

orderRouter.post('/order', checkJwtToken, makeOrder);
orderRouter.get('/order/showOrders', checkJwtToken, showUserOrders);

module.exports = orderRouter;