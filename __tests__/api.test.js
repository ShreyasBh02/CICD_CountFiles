const request = require('supertest');
const { app, server } = require('../app');

describe('API Endpoints', () => {
    // Gracefully close the server after tests
    afterAll((done) => {
        server.close(done);
    });

    describe('GET /', () => {
        test('should return welcome message and list of endpoints', async () => {
            const response = await request(app).get('/');
            expect(response.status).toBe(200);
            expect(response.body.message).toBe('Welcome to Simple Node.js Calculator API');
            expect(response.body.endpoints).toContain('POST /add - Add two numbers');
        });
    });

    const testCases = [
        { endpoint: '/add', a: 5, b: 3, result: 8, operation: 'addition' },
        { endpoint: '/subtract', a: 10, b: 4, result: 6, operation: 'subtraction' },
        { endpoint: '/multiply', a: 3, b: 7, result: 21, operation: 'multiplication' },
        { endpoint: '/divide', a: 15, b: 3, result: 5, operation: 'division' }
    ];

    testCases.forEach(({ endpoint, a, b, result, operation }) => {
        describe(`POST ${endpoint}`, () => {
            test(`should return correct result for ${operation}`, async () => {
                const response = await request(app)
                    .post(endpoint)
                    .send({ a, b });
                
                expect(response.status).toBe(200);
                expect(response.body.result).toBe(result);
                expect(response.body.operation).toBe(operation);
            });
        });
    });

    describe('POST /add - invalid input', () => {
        test('should return error when inputs are not numbers', async () => {
            const response = await request(app)
                .post('/add')
                .send({ a: 'invalid', b: 3 });
            
            expect(response.status).toBe(400);
            expect(response.body.error).toBe('Both a and b must be numbers.');
        });
    });

    describe('POST /divide - division by zero', () => {
        test('should return error when dividing by zero', async () => {
            const response = await request(app)
                .post('/divide')
                .send({ a: 10, b: 0 });
            
            expect(response.status).toBe(400);
            expect(response.body.error).toBe('Division by zero');
        });
    });

    describe('404 handler', () => {
        test('should return 404 for unknown routes', async () => {
            const response = await request(app).get('/unknown');
            expect(response.status).toBe(404);
            expect(response.body.error).toBe('Route not found');
        });
    });
});
