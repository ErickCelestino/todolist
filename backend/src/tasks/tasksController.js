const tasksService = require('./tasksService');

const findAll = async (_req,res) => {
    const tasks = await tasksService.findAll();
    const result = res.status(200).json(tasks);
    
    return result; 
};

const createTask =  async (req,res) => {
    const createTask = await tasksService.createTask(req.body);
    const result = res.status(201).json(createTask);
    
    return result;
};

const deleteTask = async(req,res) => {
    await tasksService.deleteTask(req.params.id);
    res.status(204).json(); 
};

const updateTask =  async(req,res) => {
    const updateTask = await tasksService.updateTask(req.params.id, req.body);
    return res.status(200).json(updateTask);
};

const findById = async(req,res) =>{
    const task = await tasksService.findById(req.params.id);
    return res.status(200).json(task);
};

module.exports = {
    findAll,
    createTask,
    deleteTask,
    updateTask,
    findById
};