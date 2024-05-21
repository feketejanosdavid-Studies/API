const Router = require('express');
const router = Router();

router.get('/employees', (req, res) => {
    res.json({message: 'GET method is working'})
});

router.post('/employees', (req, res) => {
    res.json({message: 'POST method is working'})
});

router.put('/employees/:id', (req, res) => {
    res.json({message: 'PUT method is working'})
});

router.delete('/employees/:id', (req, res) => {
    res.json({message: 'DELETE method is working'})
});

module.exports = router;