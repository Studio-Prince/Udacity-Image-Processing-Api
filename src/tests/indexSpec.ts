import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('the api endpoint', () => {
  it('get the api', async () => {
    const response: supertest.Response = await request.get('/api');
    expect(response.status).toBe(200);
  });
});
