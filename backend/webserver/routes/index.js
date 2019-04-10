'use strict';

const accountRouter = require('./account-router');
const userRouter = require('./user-router');
const productRouter = require('./product-router');
const orderRouter = require('./order-router');

module.exports = {
  accountRouter,
  userRouter,
  productRouter,
  orderRouter,
}