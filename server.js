const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const taskRoutes = require('./routes/taskRoutes');
const { tasks } = require('./services/taskService');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/tasks', taskRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'CrowdAPI connection successful' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
