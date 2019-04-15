'use strict';

const express = require('express');
const checkJwtToken = require('../controllers/session/check-jwt-token');
const getUserProfile = require('../controllers/user/get-user-profile');
const updateUserProfile = require('../controllers/user/update-user-profile');

const router = express.Router();
debugger;
router.get('/user', checkJwtToken, getUserProfile);
router.put('/user/update', checkJwtToken, updateUserProfile);


module.exports = router; 