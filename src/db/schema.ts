import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: 'turso', // 'mysql' | 'sqlite' | 'turso'
  schema: './src/db/schema.ts'
})