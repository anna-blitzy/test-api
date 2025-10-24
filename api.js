const express = require('express');
const router = express.Router();

// GET all users
router.get('/users', (req, res) => {
    res.json({
        success: true,
        users: [
            { id: 1, name: 'Alice', email: 'alice@example.com' },
            { id: 2, name: 'Bob', email: 'bob@example.com' }
        ]
    });
});

// GET user by ID
router.get('/users/:id', (req, res) => {
    res.json({
        success: true,
        user: { 
            id: req.params.id, 
            name: 'Test User',
            email: 'test@example.com' 
        }
    });
});

// POST create user
router.post('/users', (req, res) => {
    res.status(201).json({
        success: true,
        message: 'User created',
        user: req.body
    });
});

// PUT update user
router.put('/users/:id', (req, res) => {
    res.json({
        success: true,
        message: 'User updated',
        user: { id: req.params.id, ...req.body }
    });
});

// DELETE user
router.delete('/users/:id', (req, res) => {
    res.json({
        success: true,
        message: 'User deleted'
    });
});

module.exports = router;
