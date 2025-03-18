import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"
import { sql } from 'drizzle-orm';
/* 
    id
    first_name
    last_name
    email
    phone_number
    created_at


 */



export const customers = sqliteTable('customers', {
      id: text('id').primaryKey().notNull(),
      first_name: text('first_name').notNull(),
      last_name: text('last_name').notNull(),
      email: text('email').notNull(),
      phone_number: text('phone_number').notNull(),
      created_at: integer('created_at').default(sql`(current_timestamp)`).notNull(),
});