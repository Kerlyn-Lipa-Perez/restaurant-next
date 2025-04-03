import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"
import { orders } from "./orders";
import { menu_items } from "./menu_items";

/* 

    id: identificador único del item del pedido
    order_id: pedido al que pertenece este item
    menu_item_id: elemento del menú que se agrega al pedido
    quantity: cantidad del item
    price: precio del item

 */

export const order_items = sqliteTable('order_items', {
      id: text('id').primaryKey().notNull(),
      order_id: text('order_id').notNull().references(() => orders.id),
      menu_item_id: text('menu_item_id').notNull().references(() => menu_items.id),
      quantity: integer('quantity').notNull(),
      price: integer('price').notNull(),
});
