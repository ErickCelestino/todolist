const responseErros = require('../../exception/exceptions-errors');

const validateBody = (req, res, next) => {
    const { body } = req;
    const badRequest = 400;

    if(body.title == undefined){
        return res.status(badRequest).json({message: responseErros.titleIsRequired});
    }

    if(body.title == '') {
        return res.status(badRequest).json({message: responseErros.titleEmpty});
    }

    next();
};

module.exports = {
    validateBody,
};