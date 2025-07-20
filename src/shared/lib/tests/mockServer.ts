import type { SetupServerApi } from 'msw/node';
import { setupServer } from 'msw/node';
import { afterAll, afterEach } from 'vitest';
import { beforeAll } from 'vitest';
// For unit tests
export const mockServer = (): SetupServerApi => {
  const server = setupServer();

  beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  return server;
};
