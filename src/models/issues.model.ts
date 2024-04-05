import { sql } from 'drizzle-orm';
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const issues = sqliteTable('issues', {
  id: integer('id').primaryKey(),
  title: text('title', { length: 256 }).notNull(),
  description: text('description').notNull(),
  created_at: text('timestamp').default(sql`CURRENT_TIMESTAMP`),
});
