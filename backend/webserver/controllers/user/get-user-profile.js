'use strict';

const mysqlPool = require('../../../databases/mysql-pool');

async function getUserProfile(req, res, next) {
  const { uuid } = req.claims;

  const connection = await mysqlPool.getConnection();

  const [userData] = await connection.query(`SELECT email, nombre, apellido1, apellido2, nif, direccion, cp,
  pais, telefono, fecha_nacimiento FROM Proyecto_MO.usuario INNER JOIN Proyecto_MO.cliente ON uuid= cliente_uuid WHERE uuid= '${uuid}'`);

  const [data] = userData;

  const userProfileData = {
    email: data.email,
    name: data.nombre,
    firstSurname: data.apellido1,
    secondSurname: data.apellido2,
    nif: data.nif,
    address: data.direccion,
    zipCode: data.cp,
    country: data.pais,
    phoneNumber: data.telefono,
    birthday: data.fecha_nacimiento
  }
  return res.status(200).send(userProfileData);
}

module.exports = getUserProfile;
