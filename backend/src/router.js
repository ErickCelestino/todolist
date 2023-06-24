const express = require('express');
const tasksController = require('./tasks/tasksController');
const taskMiddleware = require('./tasks/middlewares/tasksMiddleware');

const router = express.Router();

router.get('/tasks', tasksController.getAll);
router.post('/tasks', taskMiddleware.validateBody,tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);

module.exports = router;