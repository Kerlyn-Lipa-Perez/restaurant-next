import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"
import { restaurant } from "./restaurant";
import { sql } from 'drizzle-orm';

/* 
    id: identificador único del elemento del menú
    restaurant_id: restaurante al que pertenece este elemento del menú
    name: nombre del elemento del menú
    description: descripción del elemento
    price: precio del elemento
    category: categoría del elemento (ej. entrantes, platos principales, postres)
    is_available: indica si el elemento está disponible
 */

export const menu_items = sqliteTable('menu_items', {
      id: text('id').primaryKey().notNull(),
      restaurant_id: text('restaurant_id').notNull().references(() => restaurant.id), // Relación con el restaurante
      name: text('name').notNull(),
      description: text('description'),
      price: integer('price').notNull(),
      category: text('category').notNull(),
      is_available: integer('is_available', { mode: 'boolean' }).default(sql`1`).notNull(), // Indica disponibilidad
});
