import { type RequestHandler } from 'msw';
import { setupWorker } from 'msw/browser';

const handlers: RequestHandler[] = [];

export async function enableMocking(): ReturnType<
  ReturnType<typeof setupWorker>['start']
> {
  if (import.meta.env.PROD) {
    return;
  }

  const worker = setupWorker(...handlers);
  return worker.start();
}
