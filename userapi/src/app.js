const express = require('express');
const Redis = require('ioredis');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(express.json());

const redis = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || 6379
});

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'User API',
      version: '1.0.0',
      description: 'Simple CRUD API for user management'
    },
  },
  apis: ['./src/app.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/health', async (req, res) => {
  try {
    await redis.ping();
    res.json({ status: 'healthy', redis: 'connected' });
  } catch (error) {
    res.status(500).json({ status: 'unhealthy', redis: 'disconnected' });
  }
});

app.post('/users', async (req, res) => {
  const { username, email } = req.body;
  if (!username || !email) {
    return res.status(400).json({ error: 'Username and email are required' });
  }
  
  const id = `user:${Date.now()}`;
  await redis.hset(id, 'username', username, 'email', email);
  res.status(201).json({ id, username, email });
});

app.get('/users/:id', async (req, res) => {
  const user = await redis.hgetall(req.params.id);
  if (Object.keys(user).length === 0) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json({ id: req.params.id, ...user });
});

app.put('/users/:id', async (req, res) => {
  const { username, email } = req.body;
  const exists = await redis.exists(req.params.id);
  
  if (!exists) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  await redis.hmset(req.params.id, 'username', username, 'email', email);
  res.json({ id: req.params.id, username, email });
});

app.delete('/users/:id', async (req, res) => {
  const deleted = await redis.del(req.params.id);
  if (!deleted) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.status(204).send();
});

module.exports = app;