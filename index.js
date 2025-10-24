const express = require('express');
const apiRoutes = require('./api');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// API routes
app.use('/api', apiRoutes);

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        name: 'Test API',
        version: '1.0.0',
        endpoints: [
            'GET /api/users',
            'GET /api/users/:id',
            'POST /api/users',
            'PUT /api/users/:id',
            'DELETE /api/users/:id'
        ]
    });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Test API running on port ${PORT}`);
    });
}

module.exports = app;
