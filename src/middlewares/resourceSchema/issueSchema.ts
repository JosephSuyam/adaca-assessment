import { z } from 'zod'

const issueSchema = {
  addIssueSchema: z.object({
    title: z.string().min(1),
    description: z.string(),
  }).strict(),
  updateIssueSchema: z.object({
    title: z.string().min(1),
    description: z.string().optional(),
  }).strict(),
}

export default issueSchema;
