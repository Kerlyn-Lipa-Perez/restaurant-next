import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"
import { orders } from "./orders";
import { menu_items } from "./menu_items";

/* 
    id
    order_id
    menu_item_id
    quantity
    price

 */

export const order_items = sqliteTable('order_items', {
      id: text('id').primaryKey().notNull(),
      order_id: text('order_id').notNull().references(() => orders.id),
      menu_item_id: text('menu_item_id').notNull().references(() => menu_items.id),
      quantity: integer('quantity').notNull(),
      price: integer('price').notNull(),
});