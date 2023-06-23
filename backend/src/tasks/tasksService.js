const tasksModel = require('./model/tasksModel');

const getAll = async() => {
    const tasks = await tasksModel.getAll();
    return JSON.stringify(tasks);
   
};

module.exports = {
    getAll
};