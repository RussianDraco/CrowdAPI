const { v4: uuidv4 } = require('uuid');

const tasks = {}; // task storing object

const submitTask = (req, res) => {
    const { task_name, code, input_data } = req.body;

    if (!task_name) {
        return res.status(400).json({ error: 'Invalid task_name' });
    } else if (!code) {
        return res.status(400).json({ error: 'Invalid code' });
    } else if (!input_data) {
        return res.status(400).json({ error: 'Invalid input_data' });
    }

    const taskId = uuidv4();
    tasks[taskId] = {
        taskId,
        task_name,
        code,
        input_data,
        status: 'queued',
        result: null,
    };

    // TODO: implement task execution here; simulation only for now
    setTimeout(() => {
        tasks[taskId].status = 'completed';
        tasks[taskId].result = `Result of ${task_name}`;
    }, 5000);

    res.status(201).json({ taskId, status: tasks[taskId].status });
};

const getTaskStatus = (req, res) => {
    const { taskId } = req.params;

    if (!tasks[taskId]) {
        return res.status(404).json({ error: 'Task not found' });
    }

    res.json({ taskId, status: tasks[taskId].status });
};

const getTaskResult = (req, res) => {
    const { taskId } = req.params;

    if (!tasks[taskId]) {
        return res.status(404).json({ error: 'Task not found' });
    }

    if (tasks[taskId].status === 'completed') {
        return res.status(202).json({ message: 'Task has been completed!' });
    } else {
        return res.status(202).json({ message: 'Task status: ' + tasks[taskId].status });
    }
};

const cancelTask = (req, res) => {
    const { taskId } = req.params;

    if (!tasks[taskId]) {
        return res.status(404).json({ error: 'Task not found' });
    }

    if (tasks[taskId].status === 'completed') {
        return res.status(400).json({ message: 'Task already completed, cannot be cancelled' });
    }

    tasks[taskId].status = 'cancelled';
    res.json({ taskId, status: tasks[taskId].status });
};

const currentTasks = () => {
    return tasks;
};

module.exports = {
    submitTask,
    getTaskStatus,
    getTaskResult,
    cancelTask,
    currentTasks,
};
