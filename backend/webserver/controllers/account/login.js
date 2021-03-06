'use strict';

const bcrypt = require('bcrypt');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const mysqlPool = require('../../../databases/mysql-pool');


async function validateData(payload) {
  const schema = {
    email: Joi.string().email({ minDomainAtoms: 2 }).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
  };

  return Joi.validate(payload, schema);
}

async function login(req, res, next) {

  const accountData = { ...req.body };
  // Validamos los datos de entrada con Joi
  try {
    await validateData(accountData);
  } catch (e) {
    return res.status(400).send(e);
  }

  try {
    const connection = await mysqlPool.getConnection();
    const sqlQuery = `SELECT 
    id_usuario, uuid, email, password, activated_at
    FROM usuario
    WHERE email = '${accountData.email}'`;
    const [result] = await connection.query(sqlQuery);
    if (result.length === 1) {
      const userData = result[0];

      if (!userData.activated_at) {
        return res.status(403).send();
      }

      const passwordOk = await bcrypt.compare(accountData.password, userData.password);
      if (!passwordOk) {
        return res.status(401).send();
      }

      const payloadJwt = {
        uuid: userData.uuid,
        role: 'user',
      };

      const jwtTokenExpiration = parseInt(process.env.AUTH_ACCESS_TOKEN_TTL, 10);
      const token = jwt.sign(payloadJwt, process.env.AUTH_JWT_SECRET, {
        expiresIn:
          jwtTokenExpiration
      });

      const response = {
        accessToken: token,
        expiresIn: jwtTokenExpiration,
      };

      return res.status(200).json(response);
    }

    return res.status(404).send();
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

module.exports = login; 