'use strict';

const mysqlPool = require('../../../databases/mysql-pool');



async function makeOrder(req, res, next) {
  const orderData = { ...req.body };
  const { uuid } = req.claims;

  const now = new Date();
  const orderDate = now.toISOString().substring(0, 19).replace('T', ' ');

  const {
    productId,
    productoUnits,
    productDescription
  } = orderData

  const connection = await mysqlPool.getConnection();

  await connection.query(`INSERT INTO pedido SET ?`, {
    cliente_uuid: uuid,
    id_producto: productId,
    descripcion_producto: productDescription,
    unidades_producto: productoUnits,
    fecha_pedido: orderDate,
    ultimo_cambio: orderDate
  });

  await connection.query(`UPDATE producto SET unidades = unidades - '${productoUnits}', ultimo_cambio = '${orderDate}'
  WHERE id_producto = '${productId}'`);

  return res.status(204).json();
}

module.exports = makeOrder;
