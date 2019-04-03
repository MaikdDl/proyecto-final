'use strict';
const bcrypt = require('bcrypt');
const Joi = require('joi');
const sendgridMail = require('@sendgrid/mail');
const uuidV4 = require('uuid/v4');
const mysqlPool = require('../../../databases/mysql-pool');

sendgridMail.setApiKey(process.env.SENGRID_API_KEY);

async function insertUserIntoDatabase(email, password) {
  const securePassword = await bcrypt.hash(password, 10);
  const uuid = uuidV4();
  const now = new Date();
  const createdAt = now.toISOString().substring(0, 19).replace('T', ' ');

  console.log('securePassword', securePassword);
  console.log('createdAt', createdAt);
  console.log('uuid', uuid);

  const connection = await mysqlPool.getConnection();

  await connection.query('INSERT INTO usuario SET ?', {
    uuid,
    email,
    password: securePassword,
    created_at: createdAt,
  });

  return uuid;
}

async function addVerificationCode(uuid) {
  const verificationCode = uuidV4();
  const now = new Date();
  const activatedAt = now.toISOString().substring(0, 19).replace('T', ' ');
  const sqlQuery = `UPDATE usuario
  SET verification_code = '${verificationCode}'
  WHERE uuid= '${uuid}'`;

  const connection = await mysqlPool.getConnection();

  await connection.query(sqlQuery);
  connection.release();

  return verificationCode;
}

async function sendEmailRegistration(userEmail, verificationCode) {
  const msg = {
    to: userEmail,
    from: {
      email: 'morrinhaonline@yopmail.com',
      name: 'Morriña Online',
    },
    subject: "Benvido a Morriña Online",
    text: 'Graciñas por rexistrarte en Morriña Online. Xa podes acceder a nosa web e mercar os mellores productos da túa terra',
    html: `Para confirmar a túa conta <a href="${process.env.HTTP_SERVER_DOMAIN}/api/account/activate?verification_code=${verificationCode}">actívala aquí</a>`
  };

  const data = await sendgridMail.send(msg);

  return data;
}
async function validateSchema(payload) {
  const schema = {
    email: Joi.string().email({ minDomainAtoms: 2 }).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
  };

  return Joi.validate(payload, schema);
}

async function create(req, res, next) {
  const accountData = { ...req.body };

  try {
    await validateSchema(accountData);
  } catch (e) {
    return res.status(400).send(e);
  }

  const {
    email,
    password
  } = accountData

  try {
    const uuid = await insertUserIntoDatabase(email, password);
    res.status(204).json();


    try {
      const verificationCode = await addVerificationCode(uuid);
      await sendEmailRegistration(email, verificationCode);

    } catch (e) {
      console.error('Error de Sengrid', e);
    }
  } catch (e) {
    next(e);
  }
}
module.exports = create;