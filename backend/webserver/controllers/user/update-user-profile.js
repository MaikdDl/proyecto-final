'use strict';

const mysqlPool = require('../../../databases/mysql-pool');
const Joi = require('joi');

async function validate(payload) {

  const schema = {
    nombre: Joi.string().min(3).max(64).required(),
    apellido1: Joi.string().min(3).max(64).required(),
    apellido2: Joi.string().min(3).max(64),
    nif: Joi.string().min(5).max(15).required(),
    direccion: Joi.string().min(15).max(255).required(),
    cp: Joi.string().min(3).max(15).required(),
    pais: Joi.string().min(3).max(45).required(),
    telefono: Joi.number().integer().min(100000).max(99999999999).required(),
    fecha_nacimiento: Joi.date().required(),
  };

  return Joi.validate(payload, schema);
}

async function updateUserProfile(req, res, next) {

  const userDataProfile = { ...req.body };
  const { uuid } = req.claims;
  const now = new Date();
  const lastChange = now.toISOString().substring(0, 19).replace('T', ' ');

  try {
    await validate(userDataProfile);
  } catch (e) {
    return res.status(400).send(e);
  }

  const {
    nombre,
    apellido1,
    apellido2,
    nif,
    direccion,
    cp,
    pais,
    telefono,
    fecha_nacimiento,
  } = userDataProfile

  try {
    const connection = await mysqlPool.getConnection();

    await connection.query(`UPDATE Proyecto_MO.cliente 
    SET nombre = '${nombre}', apellido1 = '${apellido1}', apellido2 = '${apellido2}', 
    nif = '${nif}', direccion = '${direccion}', cp = ${cp}, pais = '${pais}', telefono = ${telefono}, 
    fecha_nacimiento = '${fecha_nacimiento}', ultimo_cambio = '${lastChange}'
    WHERE cliente_uuid = '${uuid}';`);

    return res.status(204).send();

  } catch (err) {
    return res.status(500).send(err.message);
  }
}
module.exports = updateUserProfile;
