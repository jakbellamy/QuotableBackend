const Joi = require('joi')

export const userValidation = (user) => {
    const schema = {
        username: Joi.string().min(5).max(16).required(),
        password: Joi.string().min(6).max(1024).required(),
        imgUrl: Joi.string()
    }
    return Joi.validate(user, schema)
}