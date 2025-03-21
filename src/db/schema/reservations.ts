import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"
import { sql } from 'drizzle-orm';
import { customers } from "./customers";
import { restaurant } from "./restaurant";

/* 
    id: identificador único de la reserva
    customer_id: cliente que realiza la reserva
    restaurant_id: restaurante para el que se hace la reserva
    reservation_date: fecha y hora de la reserva
    number_of_people: número de personas
    table_number: número de mesa asignada (opcional)
    special_requests: solicitudes especiales
    status: estado de la reserva (confirmada, cancelada, completada, etc.)
    created_at: fecha de creación de la reserva
 */

export const reservations = sqliteTable('reservations', {
      id: text('id').primaryKey().notNull(),
      customer_id: text('customer_id').notNull().references(() => customers.id),
      restaurant_id: text('restaurant_id').notNull().references(() => restaurant.id), // Restaurante para la reserva
      reservation_date: integer('reservation_date').notNull(),
      number_of_people: integer('number_of_people').notNull(),
      table_number: text('table_number'), // Número de mesa asignada (opcional)
      special_requests: text('special_requests'),
      status: text('status').notNull(),
      created_at: integer('created_at').default(sql`(current_timestamp)`).notNull(),
});