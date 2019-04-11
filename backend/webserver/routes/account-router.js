'use strict';

const express = require('express');
const createAccount = require('../controllers/account/create-account');
const activateAccount = require('../controllers/account/activate-account');
const login = require('../controllers/account/login');
const logout = require('../controllers/account/logout');

const accountRouter = express.Router();

accountRouter.put('/account', createAccount);
accountRouter.get('/account/activate', activateAccount);
accountRouter.post('/account/login', login);
accountRouter.get('/account/logout', logout);

module.exports = accountRouter;