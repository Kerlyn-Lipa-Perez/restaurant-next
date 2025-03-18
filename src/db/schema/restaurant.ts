import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"
import { sql } from 'drizzle-orm';

/* 

    name
    address
    phone_number
    email
    opening_hours

 */

export const restaurant = sqliteTable('restaurant', {
      id: text('id').primaryKey().notNull(),
      name: text('name').notNull(),
      address: text('address').notNull(),
      phone_number: text('phone_number').notNull(),
      email: text('email').notNull(),
      opening_hours: text('opening_hours').notNull(),
});