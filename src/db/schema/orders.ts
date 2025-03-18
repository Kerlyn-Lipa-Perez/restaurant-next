import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"
import { sql } from 'drizzle-orm';
import { reservations } from "./reservations";
import { customers } from "./customers";
/* 
    id
    customer_id
    reservation_id
    total_amount
    status
    created_at

 */


export const orders = sqliteTable('orders', {
      id: text('id').primaryKey().notNull(),
      customer_id: text('customer_id').notNull().references(() => customers.id),
      reservation_id: text('reservation_id').notNull().references(() => reservations.id),
      total_amount: integer('total_amount').notNull(),
      status: text('status').notNull(),
      created_at: integer('created_at').default(sql`(current_timestamp)`).notNull(),
})