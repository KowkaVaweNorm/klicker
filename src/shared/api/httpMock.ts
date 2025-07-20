import { http, type HttpRequestHandler } from 'msw';

// Использовать вемсто дефолтного msw http, для подстановки корректного origin (того же, что использует fetchBaseQuery) для перехвата запросов

const httpWithBase: typeof http = { ...http };

for (const key in httpWithBase) {
  const func = httpWithBase[key as keyof typeof httpWithBase];

  const decorFunc: HttpRequestHandler = (path, ...rest) => {
    if (typeof path === 'string') {
      return func(
        (import.meta.env.PROD ? '/' : import.meta.env.VITE_BACKEND_API_URL) +
          '/' +
          path,
        ...rest,
      );
    } else {
      return func(path, ...rest);
    }
  };

  httpWithBase[key as keyof typeof httpWithBase] = decorFunc;
}

export { httpWithBase };
