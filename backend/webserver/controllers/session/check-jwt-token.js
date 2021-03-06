'use strict';

const jwt = require('jsonwebtoken');

async function checkJwtToken(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send();
  }

  const [prefix, token] = authorization.split(' ');

  if (prefix !== 'JWT') {
    return res.status(401).send();
  }

  if (!token) {
    return res.status(401).send();
  }

  try {
    const decoded = jwt.verify(token, process.env.AUTH_JWT_SECRET);

    if (!decoded) {
      return res.status(401).send();
    }

    req.claims = {
      uuid: decoded.uuid,
      role: decoded.role,
    };

    return next();
  } catch (e) {
    console.error(e.message);
    return res.status(401).send();
  }
}

module.exports = checkJwtToken;