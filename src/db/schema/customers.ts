import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"
import { sql } from 'drizzle-orm';
/* 
    id: identificador único del cliente
    first_name: nombre del cliente
    last_name: apellido del cliente
    email: correo electrónico del cliente
    phone_number: número de teléfono del cliente
    created_at: fecha de creación del cliente


 */



export const customers = sqliteTable('customers', {
      id: text('id').primaryKey().notNull(),
      first_name: text('first_name').notNull(),
      last_name: text('last_name').notNull(),
      email: text('email').notNull(),
      phone_number: text('phone_number').notNull(),
      created_at: integer('created_at').default(sql`(current_timestamp)`).notNull(),
});