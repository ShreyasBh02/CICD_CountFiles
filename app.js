const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Simple calculator functions
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
        if (b === 0) throw new Error('Division by zero');
        return a / b;
    }
};

// Routes
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Simple Node.js Calculator API',
        endpoints: [
            'GET / - This welcome message',
            'POST /add - Add two numbers',
            'POST /subtract - Subtract two numbers',
            'POST /multiply - Multiply two numbers',
            'POST /divide - Divide two numbers'
        ]
    });
});

// Utility function to handle operations
function handleOperation(req, res, operationName, operationFunc){

    try{
        const { a, b } = req.body;
        if(typeof a !==  'number' || typeof b !== 'number' ){
            return res.status(400).json({error: 'Both a and b must be numbers.'});
        }
        const result = operationFunc(a,b);
        res.json({operation: operationName, a, b, result});
    }
    catch(error){
        res.status(400).json({ error: error.message });
    }
}

// Routes: Calculator operations
app.post('/add', (req, res) => handleOperation(req, res, 'addition', calculator.add));
app.post('/subtract', (req, res) => handleOperation(req, res, 'subtraction', calculator.subtract));
app.post('/multiply', (req, res) => handleOperation(req, res, 'multiplication', calculator.multiply));
app.post('/divide', (req, res) => handleOperation(req, res, 'division', calculator.divide));



// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Route not found' });
});


// Only start server if run directly
let server;
if (require.main === module) {
  server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}



// Export for testing
module.exports = { app, calculator, server };
