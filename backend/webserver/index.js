'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes');

const app = express();
let server = null;
app.use(bodyParser.json());


app.use((req, res, next) => {
  const accesControlAllowMethods = [

  ];

  const accessControlAllowHeaders = [

  ];

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', accesControlAllowMethods.join(','));
  res.header('Access-Control-Allow-Headers', accessControlAllowHeaders.join(','));
  next();

});

app.use('/api', routes.accountRouter);
app.use('/api', routes.userRouter);
app.use((err, req, res, next) => {
  if (err.name === 'MorrinhaOnlineError') {
    const { status, errors } = err;

    return res.status(status).json(errors);
  }

  console.error('Error 500', err);
  res.status(500).json({
    message: err.message,
  });
});


async function listen(port) {
  if (server === null) {
    server = await app.listen(port);
  } else {
    console.error('El servidor ya está inicializado');
  }
}

async function close() {
  if (server) {
    await server.close();
    server = null;
  } else {
    console.error('No se puede cerrar un servidor que nos está iniciado')
  }
}
module.exports = {
  listen,
  close,
};