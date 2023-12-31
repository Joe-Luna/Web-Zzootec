import { z } from "zod";
import { categorySchema } from "./category";
import { providerSchema } from "./provider";

export const productSchema = z.object({
  id: z.number().nullable(),
  name: z.string(),
  image: z.string(),
  price: z.number(),
  stock: z.number(),
  category: categorySchema,
  supplier: providerSchema,
});

export type ProductSchemaInfer = z.infer<typeof productSchema>;
