const express = require('express');
const tasksController = require('./tasks/tasksController');
const taskMiddleware = require('./tasks/middlewares/tasksMiddleware');

const router = express.Router();

router.get('/tasks', tasksController.findAll);
router.post('/tasks', taskMiddleware.validateTitle,tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id',taskMiddleware.validateStatus, taskMiddleware.validateStatus ,tasksController.updateTask);
router.get('/tasks/:id', tasksController.findById);

module.exports = router;