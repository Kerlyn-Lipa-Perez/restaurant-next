import * as schema from './index.ts';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

const client = createClient({ 
  url: process.env['TURSO_DATABASE_URL']!, 
  authToken: process.env['TURSO_AUTH_TOKEN']!
});

export const db:any = drizzle(client, { schema });