import { z, type ZodType } from 'zod';
import { type DynamicFormSchema } from '../../types/dynamicForm';

export const fieldsToSchema = (fields: DynamicFormSchema): ZodType => {
  const validationSchema: ZodType = z
    .object(
      Object.fromEntries(
        fields.map((field) => {
          if (field.Type === 'Input') {
            return [
              field.Name,
              z.string().regex(new RegExp(field.Regex), {
                message: field.ErrorMessage,
              }),
            ];
          }

          if (field.Type === 'SingleSelectable') {
            if (field.Requable)
              return [
                field.Name,
                z.string().min(1, { message: 'Вариант не выбран' }),
              ];
            return [field.Name, z.string()];
          }

          if (field.Type === 'MultySelectable') {
            if (field.Requable)
              return [
                field.Name,
                z.string().array().min(1, { message: 'Варианты не выбраны' }),
              ];
            return [field.Name, z.string().array()];
          }

          return ['UnknownType', z.unknown()];
        }),
      ),
    )
    .strict();

  return validationSchema;
};
