const tasksModel = require('./model/tasksModel');

const getAll = async() => {
    const tasks = await tasksModel.getAll();
    return tasks;
};

module.exports = {
    getAll
};