import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';
import issueSchema from './resourceSchema/issueSchema';

const { addIssueSchema, updateIssueSchema } = issueSchema;

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

export const updateIssuesValidator = () => (req: Request, res: Response, next: NextFunction) => {
  try {
    updateIssueSchema.parse(req.body);
    next();
  } catch(e) {
    console.log(e);
    if (e instanceof z.ZodError) {
      return res.status(400).json({ message: e.issues })
    }
  }
};
