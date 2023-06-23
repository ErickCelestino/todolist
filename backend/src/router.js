const express = require('express');
const tasksController = require('./tasks/tasksController');

const router = express.Router();

router.get('/tasks', tasksController.getAll);

module.exports = router;