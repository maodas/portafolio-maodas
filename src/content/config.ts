import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('Mao Das'),
    image: z.string().optional(),
    category: z.enum(['Tecnología', 'Desarrollo', 'Análisis de Datos', 'Automatización', 'Personal']),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    readTime: z.number().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};