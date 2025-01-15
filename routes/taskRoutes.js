const express = require('express');
const router = express.Router();
const { submitTask, getTaskStatus, getTaskResult } = require('../services/taskService');

// submit new task
// exmaple: curl -X POST http://localhost:3000/tasks/submit -d "{\"task_name\":\"a\",\"code\":\"a\",\"input_data\":1}" -H "Content-Type: application/json"
router.post('/submit', submitTask);

// task status
// example: curl http://localhost:3000/tasks/7be6e971-cc8d-47ed-a876-6523691dfd63/status
router.get('/:taskId/status', getTaskStatus);

// task result
// example: curl http://localhost:3000/tasks/7be6e971-cc8d-47ed-a876-6523691dfd63/result
router.get('/:taskId/result', getTaskResult);

module.exports = router;