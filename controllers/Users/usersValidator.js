const Joi = require('joi');

const symbolSchema = Joi.object({
    name: Joi.string().pattern(/^[A-Z]{3,5}$/).required(),
    email: Joi.email().required(),
    birthdate: Joi.iso().required()})

module.exports = symbolSchema;