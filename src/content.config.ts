import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const projects = defineCollection({
  loader: file('src/content/projects.json'),
  schema: z.object({
    id: z.string(),
    order: z.number(),
    title: z.string(),
    category: z.string(),
    description: z.string(),
    role: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    link: z.string().url().optional(),
    github: z.string().url().optional(),
    githubFront: z.string().url().optional(),
    githubBack: z.string().url().optional(),
  }),
});

const experience = defineCollection({
  loader: file('src/content/experience.json'),
  schema: z.object({
    id: z.string(),
    order: z.number(),
    position: z.string(),
    company: z.string(),
    duration: z.string(),
    descriptions: z.array(z.string()),
    technologies: z.array(z.string()),
  }),
});

const education = defineCollection({
  loader: file('src/content/education.json'),
  schema: z.object({
    id: z.string(),
    order: z.number(),
    degree: z.string(),
    institution: z.string(),
    year: z.string(),
    detail: z.string(),
  }),
});

const skills = defineCollection({
  loader: file('src/content/skills.json'),
  schema: z.object({
    id: z.string(),
    order: z.number(),
    title: z.string(),
    skills: z.array(
      z.object({
        icon: z.string(),
        name: z.string(),
      })
    ),
  }),
});

export const collections = { projects, experience, education, skills };
