'use strict';

const mysql = require('../../../databases/mysql-pool');

async function getProducts(req, res, next) {
  const connection = await mysql.getConnection();

  const [productData] = await connection.query('SELECT id_producto, imagen, nombre, descripcion, precio FROM Proyecto_MO.producto;')

  console.log('Productos:', productData);

  return res.status(200).send(productData);
}

module.exports = getProducts;