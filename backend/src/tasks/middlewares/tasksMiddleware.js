const responseErros = require('../../exception/exceptions-errors');

const badRequest = 400;

const validateTitle = (req, res, next) => {
    const { body } = req;
    const title = 'title';
    if(body.title == undefined){
        return res.status(badRequest).json({message: responseErros.elementIsRequired(title)});
    }

    if(body.title == '') {
        return res.status(badRequest).json({message: responseErros.elementEmpty(title)});
    }

    next();
};

const validateStatus = (req, res, next) => {
    const { body } = req;
    const status = 'status';
    if(body.status == undefined){
        return res.status(badRequest).json({message: responseErros.elementIsRequired(status)});
    }

    if(body.status == '') {
        return res.status(badRequest).json({message: responseErros.elementEmpty(status)});
    }

    next();
};


module.exports = {
    validateTitle,
    validateStatus
};