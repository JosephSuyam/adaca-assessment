import { Request, Response } from 'express';
import { db } from '../database';
import { issues } from '../models/issues.model';

export default class IssuesService {
  async createIssues(req: Request, res: Response): Promise<Response> {
    try {
      const issue = await db.insert(issues).values(req.body).returning();

      return res.status(201).json({
        success: true,
        data: issue,
        message: 'Added Successfully',
      });
    } catch (error) {
      console.log('createIssues error:', error);
      return res.status(500).json({ success: false, message: error });
    }
  };
}
