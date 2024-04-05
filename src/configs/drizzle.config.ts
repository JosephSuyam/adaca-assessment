import type { Config } from 'drizzle-kit';
import dotenv from 'dotenv';

dotenv.config();

export default {
  schema: './src/models/*',
  out: './migrations',
  dbCredentials: {
    url: process.env.DB_URL!,
  },
  driver: 'libsql',
} satisfies Config;
