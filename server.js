const express = require('express');
const app = express();

app.use(express.json());

// Массив задач
let todos = [{ id: 1, title: 'Express-ті үйрену', done: false }];

// GET /api/todos — получить все задачи (статус 200)
app.get('/api/todos', (req, res) => {
    res.status(200).json(todos);
});

// POST /api/todos — добавить задачу (статус 201)
app.post('/api/todos', (req, res) => {
    const { title, done } = req.body;

    if (!title || typeof title !== 'string' || !title.trim()) {
        return res.status(400).json({ error: 'title өрісі міндетті және бос болмауы керек' });
    }

    const nextId = todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
    const newTodo = {
        id: nextId,
        title: title.trim(),
        done: typeof done === 'boolean' ? done : false,
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// GET /api/hello — приветствие с query-параметром name
app.get('/api/hello', (req, res) => {
    const { name } = req.query;
    if (name) {
        return res.json({ message: `Сәлем, ${name}!` });
    }
    res.json({ message: 'әлем' });
});

// GET /api/hello/:name — приветствие с параметром пути :name
app.get('/api/hello/:name', (req, res) => {
    const { name } = req.params;
    res.json({ message: `Сәлем, ${name}!` });
});

// GET /api/status — статус сервера (200, timestamp, uptime)
app.get('/api/status', (req, res) => {
    res.status(200).json({
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
    });
});

// Порт и запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер http://localhost:${PORT} портында іске қосылды`);
});