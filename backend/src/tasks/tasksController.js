const tasksService = require('./tasksService');

const getAll = async (req,res) => {
    const tasks = await tasksService.getAll();
    const result = res.status(200).json(tasks);
    
    return result; 
};

module.exports = {
    getAll
};