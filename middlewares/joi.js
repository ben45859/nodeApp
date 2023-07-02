const createHttpError = require('http-errors');

module.exports = (validator) => async(req, res, next) => {
    try{
        console.log(req.body)
        const validated = await validator.validateAsync(req.body);
        req.body = validated;
        return next();
    } catch(err){
        if (err.isJoi){
            return next(createHttpError(422, {message: err.message}));
        }
    }
}