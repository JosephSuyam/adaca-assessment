import { Router } from 'express';
import issuesRouter from './issues.route';

const baseRouter = Router();

baseRouter.use('/issues', issuesRouter);

export default baseRouter;
