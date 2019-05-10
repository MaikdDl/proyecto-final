'use strict';

const mysqlPool = require('../../../databases/mysql-pool');

async function getProducts(req, res, next) {
  const connection = await mysqlPool.getConnection();


  const [productData] = await connection.query('SELECT id_producto, imagen, nombre, descripcion, precio FROM Proyecto_MO.producto;')

  const data = productData.map(productItem => {
    return {
      productId: productItem.id_producto,
      name: productItem.nombre,
      productDescription: productItem.descripcion,
      price: productItem.precio,
      image: productItem.imagen
    }
  });



  return res.status(200).send(data);
}

module.exports = getProducts;