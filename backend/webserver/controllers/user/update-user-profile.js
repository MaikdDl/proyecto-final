'use strict';

const dot = require('dot-object');
const Joi = require('joi');

async function validate(payload) {
  const schema = {
    nombre: Joi.string().min(3).max(64).required(),
    apellido1: Joi.string().min(3).max(64).required(),
    apellido2: Joi.string().min(3).max(64).required(),
    nif: Joi.string().min(5).max(15).required,
    direccion: Joi.string().min(15).max(255).required(),
    cp: Joi.string().min(3).max(15).required(),
    pais: Joi.string().min(3).max(45).required(),
    telefono: Joi.number().integer().min(100000).max(99999999999).required(),
    fecha_nacimiento: Joi.date().required(),
  };

  return Joi.validate(payload, schema);
}

async function updateUserProfile(req, res, next) {

  const userDataProfile = { ...req.body };
  const { claims } = req;

  try {
    await validate(userDataProfile);
  } catch (e) {
    return res.status(400).send(e);
  }

  //TODO: UPDATE BBDD con los nuevos datos
}
module.exports = updateUserProfile;
