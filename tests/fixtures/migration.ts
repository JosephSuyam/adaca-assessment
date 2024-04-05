import { migrate } from 'drizzle-orm/libsql/migrator';
import { db } from '../../src/database/index';

const runMigration = async () => {
  try {
    await migrate(db, { migrationsFolder: './migrations' });
  } catch (error) {
    console.log(error);
  }
};

export default runMigration;
