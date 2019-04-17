'use strict';

const mysqlPool = require('../../../databases/mysql-pool');

async function showUserOrders(req, res, next) {
  const { uuid } = req.claims;
  const connection = await mysqlPool.getConnection();

  const [orderData] = await connection.query(`SELECT * FROM Proyecto_MO.pedido WHERE cliente_uuid = '${uuid}'`);

  return res.status(200).send(orderData);

}

module.exports = showUserOrders;