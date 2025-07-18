const request = require('supertest');
const app = require('../server');

describe('Bug Tracker API', () => {
  it('GET /api/bugs should return 200', async () => {
    const res = await request(app).get('/api/bugs');
    expect(res.statusCode).toBe(200);
  });
});
