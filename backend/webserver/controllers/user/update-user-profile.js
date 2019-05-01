'use strict';

const mysqlPool = require('../../../databases/mysql-pool');
const Joi = require('joi');

async function validate(payload) {

  const schema = {
    name: Joi.string().min(3).max(64).required(),
    firstSurname: Joi.string().min(3).max(64).required(),
    secondSurname: Joi.string().min(3).max(64),
    nif: Joi.string().min(5).max(15).required(),
    address: Joi.string().min(15).max(255).required(),
    zipCode: Joi.number().integer().min(100).max(9999999999).required(),
    country: Joi.string().min(3).max(45).required(),
    phoneNumber: Joi.number().integer().min(100000).max(99999999999).required(),
    birthday: Joi.date().required(),
  };

  return Joi.validate(payload, schema);
}

async function updateUserProfile(req, res, next) {

  const userDataProfile = { ...req.body };
  const { uuid } = req.claims;
  const now = new Date();
  // let birthdayDate = new Date();

  const lastChange = now.toISOString().substring(0, 19).replace('T', ' ');

  try {
    await validate(userDataProfile);
  } catch (e) {
    return res.status(400).send(e);
  }

  const {
    name,
    firstSurname,
    secondSurname,
    nif,
    address,
    zipCode,
    country,
    phoneNumber,
    birthday
  } = userDataProfile
  // birthdayDate = birthday;
  // birthdayOk = birthdayDate.toISOString().substring(0, 19).replace('T', ' ');
  // const birthdayOk = birthday.toMysqlFormat();
  const birthdayOk = Date.parse(birthday);


  try {
    const connection = await mysqlPool.getConnection();

    await connection.query(`UPDATE Proyecto_MO.cliente 
    SET nombre = '${name}', apellido1 = '${firstSurname}', apellido2 = '${secondSurname}', 
    nif = '${nif}', direccion = '${address}', cp = ${zipCode}, pais = '${country}', telefono = ${phoneNumber}, 
    fecha_nacimiento = FROM_UNIXTIME('${birthdayOk}'), ultimo_cambio = '${lastChange}'
    WHERE cliente_uuid = '${uuid}';`);

    return res.status(204).send();

  } catch (err) {
    return res.status(500).send(err.message);
  }
}
module.exports = updateUserProfile;
