'use strict';

const mysqlPool = require('../../../databases/mysql-pool');

async function getProductDetail(req, res, next) {

  const idProduct = req.params.id_producto;
  const connection = await mysqlPool.getConnection();

  const [productDetail] = await connection.query(`SELECT imagen, nombre, descripcion, precio FROM Proyecto_MO.producto WHERE id_producto= '${idProduct}'`);

  return res.status(200).send(productDetail);
}

module.exports = getProductDetail;