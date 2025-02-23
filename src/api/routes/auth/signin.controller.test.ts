
import { test, expect } from 'vitest';
import { app } from '@/app';

test('GET /signin should return status OK', async () => {
  const response = await app.inject({
    method: 'GET',
    url: '/signin'
  });

  expect(response.statusCode).toBe(200);
  expect(response.json()).toEqual({ status: 'ok' });
});