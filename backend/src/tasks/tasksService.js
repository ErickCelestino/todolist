const tasksModel = require('./model/tasksModel');

const getAll = async() => {
    const tasks = await tasksModel.getAll();
    return tasks;
   
};

const createTask = async (task) => {
    const createTask = await tasksModel.createTask(task);
    return createTask;
};

const deleteTask = async (id) => {
    const deleteTask = await tasksModel.deleteTask(id);
    return deleteTask;
};

module.exports = {
    getAll,
    createTask,
    deleteTask
};