import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"
import { sql } from 'drizzle-orm';
import { customers } from "./customers";
/* 
    id
    customer_id
    reservation_date
    number_of_people
    special_requests
    status
    created_at


 */



export const reservations = sqliteTable('reservations', {
      id: text('id').primaryKey().notNull(),
      customer_id: text('customer_id').notNull().references(() => customers.id),
      reservation_date: integer('reservation_date').notNull(),
      number_of_people: integer('number_of_people').notNull(),
      special_requests: text('special_requests'),
      status: text('status').notNull(),
      created_at: integer('created_at').default(sql`(current_timestamp)`).notNull(),
});