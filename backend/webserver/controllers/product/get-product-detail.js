'use strict';

const mysql = require('../../../databases/mysql-pool');

async function getProductDetail(req, res, next) {

  const idProducto = req.params.id_producto;


  const connection = await mysql.getConnection();
  console.log(req.params.id_producto);

  const [productDetail] = await connection.query(`SELECT imagen, nombre, descripcion, precio FROM Proyecto_MO.producto WHERE id_producto= '${idProducto}'`);

  // console.log('Producto:', productDetail);

  return res.status(200).send(productDetail);
}

module.exports = getProductDetail;