import { z } from 'zod'
import { Request, Response, NextFunction } from 'express';
import issueSchema from './resourceSchema/issueSchema';

const { addIssueSchema } = issueSchema;

export const addIssuesValidator = () => (req: Request, res: Response, next: NextFunction) => {
  try {
    addIssueSchema.parse(req.body);
    next();
  } catch(e) {
    console.log(e);
    if (e instanceof z.ZodError) {
      return res.status(400).json({ message: e.issues })
    }
  }
};
