'use strict';

async function logout(req, res, next) {
  return res.status(200).send("O usuario deslogouse");
}

module.exports = logout;