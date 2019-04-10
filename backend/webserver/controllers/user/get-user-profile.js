'use strict';

const mysqlPool = require('../../../databases/mysql-pool');

async function getUserProfile(req, res, next) {
  const { uuid } = req.claims;

  const connection = await mysqlPool.getConnection();

  const userData = await connection.query(`SELECT * FROM Proyecto_MO.usuario INNER JOIN Proyecto_MO.cliente ON uuid= cliente_uuid WHERE uuid= '${uuid}'`);

  console.log('Datos de usuario:', userData);

  return res.status(200).send(userData);
}

module.exports = getUserProfile;
