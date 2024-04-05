import { Request, Response } from 'express';
import { eq } from 'drizzle-orm';
import { db } from '../database';
import { issues } from '../models/issues.model';

export default class IssuesService {
  async getIssues(req: Request, res: Response): Promise<Response> {
    try {
      const data = await db.select().from(issues);

      return res.status(200).json({ success: true, data: data });
    } catch (error) {
      console.log('getIssues error:', error);
      return res.status(500).json({ success: false, message: error });
    }
  };

  async getIssue(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const data = await db.select().from(issues).where(eq(issues.id, Number(id)));

      return res.status(200).json({ success: true, data });
    } catch (error) {
      console.log('getIssue error:', error);
      return res.status(500).json({ success: false, message: error });
    }
  };

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

  async updateIssues(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const issue = await db
        .update(issues)
        .set(req.body)
        .where(eq(issues.id, Number(id)))
        .returning();

      return res.status(200).json({ success: true, data: issue, message: 'Updated Successfully' });
    } catch (error) {
      return res.status(500).json({ success: true, message: 'Cannot Update' });
    }
  };

  async deleteIssue(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      await db.delete(issues).where(eq(issues.id, Number(id)));

      return res.status(200).json({ success: true, message: 'Delete Successfully' });
    } catch (error) {
      console.log('deleteIssue error:', error);
      return res.status(500).json({ success: true, message: 'Cannot Delete' });
    }
  };
}
