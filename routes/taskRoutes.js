const express = require('express');
const router = express.Router();
const { submitTask, getTaskStatus, getTaskResult, cancelTask, 
        currentTasks } = require('../services/taskService');

router.get('/', (req, res) => {res.json(currentTasks());});

// submit new task
// exmaple: curl -X POST http://localhost:3000/tasks/submit -d "{\"task_name\":\"a\",\"code\":\"a\",\"input_data\":1}" -H "Content-Type: application/json"
router.post('/submit', submitTask);

// task status
// example: curl http://localhost:3000/tasks/TASK_ID/status
router.get('/:taskId/status', getTaskStatus);

// task result
// example: curl http://localhost:3000/tasks/TASK_ID/result
router.get('/:taskId/result', getTaskResult);

// cancel task
// example: curl -X POST http://localhost:3000/tasks/TASK_ID/cancel
router.post('/:taskId/cancel', cancelTask);

module.exports = router;