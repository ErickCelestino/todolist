const tasksService = require('./tasksService');

const getAll = async (_req,res) => {
    const tasks = await tasksService.getAll();
    const result = res.status(200).json(tasks);
    
    return result; 
};

const createTask =  async (req,res) => {
    const createTask = await tasksService.createTask(req.body);
    const result = res.status(201).json(createTask);
    
    return result;
};

module.exports = {
    getAll,
    createTask
};