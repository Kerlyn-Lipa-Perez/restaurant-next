import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"


/* 
    id
    name
    description
    price
    category
 */




export const menu_items = sqliteTable('menu_items', {
      id: text('id').primaryKey().notNull(),
      name: text('name').notNull(),
      description: text('description'),
      price: integer('price').notNull(),
      category: text('category').notNull(),
});
