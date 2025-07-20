import { z } from 'zod';

export const inputSchema = z
  .object({
    Type: z.literal('Input'),
    Name: z.string(),
    Placeholder: z.string(),
    Regex: z.string(),
    ErrorMessage: z.string(),
    Requable: z.boolean(),
    Default: z.string(),
  })
  .strict();

export const singleSelectableSchema = z
  .object({
    Type: z.literal('SingleSelectable'),
    Name: z.string(),
    Placeholder: z.string(),
    Values: z.object({ code: z.string(), description: z.string() }).array(),
    Requable: z.boolean(),
    Default: z.string(),
  })
  .strict();

export const multySelectableSchema = z
  .object({
    Type: z.literal('MultySelectable'),
    Name: z.string(),
    Placeholder: z.string(),
    Values: z.object({ code: z.string(), description: z.string() }).array(),
    Requable: z.boolean(),
    Default: z.string().array(),
  })
  .strict();

export const dynamicFormSchema = z
  .discriminatedUnion('Type', [
    inputSchema,
    singleSelectableSchema,
    multySelectableSchema,
  ])
  .array();
