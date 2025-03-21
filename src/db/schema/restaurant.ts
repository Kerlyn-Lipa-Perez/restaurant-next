import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"
import { sql } from 'drizzle-orm';

/* 
    Tabla de restaurantes mejorada:
    - id: identificador único del restaurante
    - name: nombre del restaurante
    - address: dirección física del restaurante
    - phone_number: número de teléfono (cambiado a texto para incluir formato)
    - email: correo electrónico de contacto
    - location_area: zona o área de ubicación (útil para filtrar por zonas)
    - opening_hours: horario de apertura
    - closing_hours: horario de cierre
    - is_active: indica si el restaurante está activo
    - created_at: fecha de creación del registro
 */

export const restaurant = sqliteTable('restaurant', {
      id: text('id').primaryKey().notNull(),
      name: text('name').notNull(),
      address: text('address').notNull(),
      phone_number: text('phone_number').notNull(), // Cambiado a texto para incluir formato
      email: text('email').notNull(),
      location_area: text('location_area').notNull(), // Zona o área de ubicación
      opening_hours: text('opening_hours').notNull(), // Horario de apertura
      closing_hours: text('closing_hours').notNull(), // Horario de cierre
      is_active: integer('is_active', { mode: 'boolean' }).default(sql`1`).notNull(), // Indica si el restaurante está activo
      created_at: integer('created_at').default(sql`(current_timestamp)`).notNull(), // Fecha de creación
});
