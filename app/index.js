const express = require('express');
const app = express();
const port = 8000;

app.get('/api/employees', (req, res) => {
    res.json({message: 'Database is working'})
});

app.listen(port, () => {
    console.log(`Listening localhost:${port}`);
});