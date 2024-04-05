import { z } from 'zod'

const issueSchema = {
  addIssueSchema: z.object({
    title: z.string().min(1),
    description: z.string(),
  }),
  updateIssueSchema: z.object({
    title: z.string().min(1),
    description: z.string(),
  }).partial(),
}

export default issueSchema;
