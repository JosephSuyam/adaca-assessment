import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.DB_URL) {
  throw new Error('DB credentials error');
}

const connection = createClient({ url: process.env.DB_URL });

export const db = drizzle(connection);
