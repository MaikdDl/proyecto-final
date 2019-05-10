'use strict';

const mysqlPool = require('../../../databases/mysql-pool');

async function showUserOrders(req, res, next) {
  const { uuid } = req.claims;
  const connection = await mysqlPool.getConnection();

  const [orderData] = await connection.query(`SELECT nombre_producto, fecha_pedido FROM Proyecto_MO.pedido WHERE cliente_uuid = '${uuid}'`);

  const data = orderData.map(orderItem => {
    return {
      productName: orderItem.nombre_producto,
      orderDate: orderItem.fecha_pedido
    }
  });
  return res.status(200).send(data);

}

module.exports = showUserOrders;