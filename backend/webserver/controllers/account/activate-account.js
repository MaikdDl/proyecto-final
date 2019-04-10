'use strict';

const mysqlPool = require('../../../databases/mysql-pool');

async function activate(req, res, next) {
  const { verification_code: verificationCode } = req.query;

  if (!verificationCode) {
    return res.status(400).json({
      message: 'O código de verificación non é válido',
      target: 'verification_code',
    });
  }

  const now = new Date();
  const sqlActivateQuery = `UPDATE usuario
  SET activated_at = '${now.toISOString().substring(0, 19).replace('T', ' ')}'
  WHERE verification_code='${verificationCode}'
  AND activated_at IS NULL`;

  try {
    const connection = await mysqlPool.getConnection();
    const resultActivateUser = await connection.query(sqlActivateQuery);

    if (resultActivateUser[0].affectedRows === 1) {
      connection.release();
      return res.send('A súa conta foi activada correctamente')
    }
    connection.release();
    return res.send('O código de verificación non é válido')
  } catch (e) {
    return res.status(500).send(e.message);
  }

}

module.exports = activate;