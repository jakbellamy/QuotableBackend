const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

export const winCardValidation = (winCard) => {
    const schema = {
        imgUrl: Joi.string().required(),
        quote: Joi.string().required(),
        user: Joi.objectId().required()
    }
    return Joi.validate(winCard, schema)
}
