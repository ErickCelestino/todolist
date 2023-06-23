const tasksService = require('./tasksService');

const getAll = (req,res) => {
    return res.status(200).json(tasksService.getAll());
};

module.exports = {
    getAll
};