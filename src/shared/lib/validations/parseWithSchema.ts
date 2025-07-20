import { ZodError, type z, type ZodTypeAny } from 'zod';

export const parseWithSchema = <T extends ZodTypeAny>(
  data: unknown,
  schema: T,
): z.infer<T> => {
  try {
    return schema.parse(data);
  } catch (e) {
    if (e instanceof ZodError) {
      if (import.meta.env.DEV) {
        console.error('Данные не соответствуют схеме ', e.message);
      }
    }

    throw e;
  }
};
