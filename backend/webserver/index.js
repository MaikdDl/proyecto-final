'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../webserver/routes');

const app = express();
let server = null;
app.use(bodyParser.json());


app.use((req, res, next) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Methods',
    'PUT, POST, PATCH, GET, DELETE,OPTIONS'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();

});


app.get('/', (req, res) => res.send('main entry point'));
app.use('/api', routes.orderRouter);
app.use('/api', routes.accountRouter);
app.use('/api', routes.userRouter);
app.use('/api', routes.productRouter);


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
    console.error('O servidor xa está inicializado');
  }
}

async function close() {
  if (server) {
    await server.close();
    server = null;
  } else {
    console.error('Non se pode pechar un servidor que non está iniciado')
  }
}
module.exports = {
  listen,
  close,
};