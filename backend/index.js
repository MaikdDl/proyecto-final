'use strict';

require("dotenv").config();
const webServer = require("./webserver");
const httpServerConfig = require("./config/http-server-config");
const mysqlPool = require('./databases/mysql-pool');

(async function initApp() {
  try {
    await mysqlPool.connect();
    await webServer.listen(httpServerConfig.port);
    console.log(`Servidor iniciado no porto: ${httpServerConfig.port}`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
