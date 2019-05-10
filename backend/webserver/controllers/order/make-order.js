'use strict';

const mysqlPool = require('../../../databases/mysql-pool');



async function makeOrder(req, res, next) {
  const orderData = { ...req.body };
  const { uuid } = req.claims;

  const now = new Date();
  const orderDate = now.toISOString().substring(0, 19).replace('T', ' ');

  const {
    id_producto: productId,
    unidades_producto: productUnits,
    nombre_producto: productName
  } = orderData

  const connection = await mysqlPool.getConnection();
  console.log('productId', productId);
  await connection.query(`INSERT INTO pedido SET ?`, {
    cliente_uuid: uuid,
    id_producto: productId,
    nombre_producto: productName,
    unidades_producto: productUnits,
    fecha_pedido: orderDate,
    ultimo_cambio: orderDate
  });

  await connection.query(`UPDATE producto SET unidades = unidades - '${productUnits}', ultimo_cambio = '${orderDate}'
  WHERE id_producto = '${productId}'`);

  return res.status(204).json();
}

module.exports = makeOrder;
