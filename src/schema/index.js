const Joi = require('joi');

const createUser = Joi.object().keys({
  name: Joi.string()
        .required()
        .messages({
          'string.empty': `o campo nome é obrigatório`,
          'any.required': `o campo nome é obrigatório.`
        }),
  password: Joi.string()
            .min(5)
            .required()
            .messages({
              'string.empty': `o campo password é obrigatório`,
              'string.min': `seu password deve conter pelo menos 5 caractere`,
              'any.required': `o campo password é obrigatório.` 
            }),
  phoneNumber: Joi.string()
                .regex(/\d/)
                .min(10)
                .max(11)
                .messages({
                  'string.pattern.base': `somente número de celular ou telefone fixo`,
                  'string.min': `somente número de celular ou telefone fixo`,
                  'string.max': `somente número de celular ou telefone fixo`,
                  'string.empty': `o campo telefone é obrigatório`,
                })
})

module.exports = {
  createUser,
}
