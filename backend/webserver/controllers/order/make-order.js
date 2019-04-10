'use strict';

const mysqlPool = require('../../../databases/mysql-pool');



async function makeOrder(req, res, next) {
  const orderData = { ...req.body };

  const now = new Date();
  const orderDate = now.toISOString().substring(0, 19).replace('T', ' ');

  const {
    uuid,
    id_producto: idProducto,
    unidades_producto: unidades,
    descripcion_producto: descripcion
  } = orderData

  const connection = await mysqlPool.getConnection();

  console.log('uuid', uuid);
  console.log('idProducto', idProducto);
  console.log('unidades', unidades);
  console.log('descripcion', descripcion);
  console.log('fecha pedido', orderDate);

  await connection.query(`INSERT INTO pedido SET ?`, {
    cliente_uuid: uuid,
    id_producto: idProducto,
    descripcion_producto: descripcion,
    unidades_producto: unidades,
    fecha_pedido: orderDate,
    ultimo_cambio: orderDate
  });

  await connection.query(`UPDATE producto SET unidades = unidades - '${unidades}'
  WHERE id_producto = '${idProducto}'`);

  return res.status(204).json();
}

module.exports = makeOrder;
