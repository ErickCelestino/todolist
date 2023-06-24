const tasksModel = require('./model/tasksModel');

const getAll = async() => {
    const tasks = await tasksModel.getAll();
    return tasks;
   
};

const createTask = async (task) => {
    const createTask = await tasksModel.createTask(task);
    return createTask;
};

module.exports = {
    getAll,
    createTask
};