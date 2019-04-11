'use strict';

const mysqlPool = require('../../../databases/mysql-pool');

async function showUserOrders(req, res, next) {
  // const { uuid } = req.claims;
  const { uuid } = { ...req.body };

  console.log('uuid: ', uuid);

  const connection = await mysqlPool.getConnection();

  // const [orderData] = await connection.query(`SELECT * FROM Proyecto_MO.pedido WHERE cliente_uuid = '${uuid}'`);
  const [orderData] = await connection.query(`SELECT * FROM Proyecto_MO.pedido WHERE cliente_uuid = '${uuid}'`);

  console.log('Datos dos pedidos:', orderData);

  return res.status(200).send(orderData);

}

module.exports = showUserOrders;