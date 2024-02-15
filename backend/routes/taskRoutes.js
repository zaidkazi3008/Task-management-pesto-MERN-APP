const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const { validateTask } = require('../middleware/validationMiddleware');

router.get('/tasks', taskController.getAllTasks);
router.post('/tasks', validateTask, taskController.createTask);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;
