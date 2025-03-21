import type {Config} from 'drizzle-kit'


export default {
    dialect: 'turso',
    schema: './src/db/schema.ts',
    out: './src/db/migrations',
    dbCredentials: {
        url: process.env['TURSO_DATABASE_URL']!,
        authToken: process.env['TURSO_AUTH_TOKEN']!
    }
    
} satisfies Config;
