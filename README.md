Simple Node.js Calculator API
A simple REST API built with Node.js and Express that performs basic calculator operations with comprehensive testing.

Features
```
✅ Basic arithmetic operations (add, subtract, multiply, divide)
✅ RESTful API endpoints
✅ Input validation
✅ Error handling
✅ Unit tests with Jest
✅ Integration tests with Supertest
✅ Code coverage reporting
```

Project Structure
```
simple-nodejs-app/
├── app.js                 # Main application file
├── package.json           # Project dependencies and scripts
├── jest.config.js         # Jest configuration
├── __tests__/
│   ├── calculator.test.js # Unit tests for calculator functions
│   └── api.test.js        # Integration tests for API endpoints
└── README.md             # This file
```

Installation
Clone or create the project directory
Install dependencies:
```
bash
npm install
```

Usage
Start the server
```
bash
npm start
```
Server will run on http://localhost:3000

Development mode (with auto-restart)
```
bash
npm run dev
```

Run tests
```bash
# Run all tests
npm test
```
# Run tests in watch mode
npm run test:watch
API Endpoints
GET /
Returns welcome message and available endpoints.

POST /add
Add two numbers.

json
{
  "a": 5,
  "b": 3
}
POST /subtract
Subtract two numbers.

json
{
  "a": 10,
  "b": 4
}
POST /multiply
Multiply two numbers.

json
{
  "a": 3,
  "b": 7
}
POST /divide
Divide two numbers.

json
{
  "a": 15,
  "b": 3
}
Testing
The project includes comprehensive tests:

Unit Tests: Test individual calculator functions
Integration Tests: Test API endpoints end-to-end
Coverage Reports: Generated in coverage/ directory
Test Examples
bash
# Run specific test file
npx jest __tests__/calculator.test.js

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm run test:watch
Error Handling
Invalid input types return 400 status
Division by zero returns 400 status with error message
Unknown routes return 404 status
Dependencies
express: Web framework
jest: Testing framework
supertest: HTTP assertion library for testing
nodemon: Development auto-restart tool
Example Usage
bash
# Start the server
npm start

# Test with curl
curl -X POST http://localhost:3000/add \
  -H "Content-Type: application/json" \
  -d '{"a": 5, "b": 3}'

# Response:
# {"operation":"addition","a":5,"b":3,"result":8}
