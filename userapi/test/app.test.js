import { expect } from 'chai';
import request from 'supertest';
import app from '../src/app.js';

describe('User API', () => {
  it('should return health status', async () => {
    const res = await request(app).get('/health');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('status');
  });

  it('should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        username: 'testuser',
        email: 'test@example.com'
      });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('username', 'testuser');
  });
});