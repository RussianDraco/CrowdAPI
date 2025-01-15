const express = require('express');
const router = express.Router();
const { submitTask } = require('../services/taskService');

// submit new task
router.post('/submit', submitTask);

module.exports = router;