import request from 'supertest';
import app from '../src/app';
import dotenv from 'dotenv';
import runMigration from './fixtures/migration';

dotenv.config();

let id: number;
const newIssue = {
  title: 'Success POST',
  description: 'Should be saved to db.',
};

describe('Issues CRUD Endpoints', () => {
  beforeAll(async () => {
    await runMigration();
  });

  describe('POST -- /api/issues', () => {
    it('should add new issue', async () => {
      return request(app)
        .post('/api/issues')
        .send(newIssue)
        .expect('Content-Type', /json/)
        .expect(201)
        .then((res) => {
          expect(res.statusCode).toBe(201);
          const { data } = res.body;
          expect(data.title).toBe(newIssue.title);
          expect(data.description).toBe(newIssue.description);
          id = data.id;
        })
    });

    it('should validate empty request', async () => {
      return request(app)
        .post('/api/issues')
        .send()
        .expect(400)
        .then((res) => {
          expect(res.statusCode).toBe(400);
        })
    });
  });

  describe('GET -- /api/issues', () => {
    it('should return all issues', async () => {
      return request(app)
        .get('/api/issues')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          expect(res.statusCode).toBe(200);
          expect(res.body.data.length).not.toBe(0);
        })
    });
  });

  describe('GET -- /api/issues/:id', () => {
    it('should return specific issue', async () => {
      return request(app)
        .get(`/api/issues/${id}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          expect(res.statusCode).toBe(200);
          expect(res.body.data.length).not.toBe(0);
        })
    });
  });

  describe('PUT -- /api/issues/:id', () => {
    it('should update and return updated issue', async () => {
      return request(app)
        .put(`/api/issues/${id}`)
        .send({ title: 'Updated Issue' })
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          expect(res.statusCode).toBe(200);
          const { data } = res.body;
          expect(data.title).toBe('Updated Issue');
        })
    });

    it('should validate empty request', async () => {
      return request(app)
        .put(`/api/issues/${id}`)
        .send()
        .expect(400)
        .then((res) => {
          expect(res.statusCode).toBe(400);
        })
    });
  });

  describe('DELETE -- /api/issues/:id', () => {
    it('should return specific issue', async () => {
      return request(app)
        .delete(`/api/issues/${id}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          expect(res.statusCode).toBe(200);
        })
    });
  });
});
