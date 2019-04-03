'use strict';

const express = require('express');
const createAccount = require('../webserver/controllers/account/create-account');

const accountRouter = express.Router();

accountRouter.post('/account', createAccount);

module.exports = accountRouter;