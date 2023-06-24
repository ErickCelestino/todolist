const tasksModel = require('./model/tasksModel');

const findAll = async() => {
    const tasks = await tasksModel.findAll();
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

const updateTask = async (id, body) => {
    const updateTask = await tasksModel.updateTask(id,body);
    return updateTask;
};

const findById = async (id) => {
    const findTaskById = await tasksModel.findById(id);
    return findTaskById;
};

module.exports = {
    findAll,
    createTask,
    deleteTask,
    updateTask,
    findById
};