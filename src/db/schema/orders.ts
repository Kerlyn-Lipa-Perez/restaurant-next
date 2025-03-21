import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"
import { sql } from 'drizzle-orm';
import { reservations } from "./reservations";
import { customers } from "./customers";
import { restaurant } from "./restaurant";

/* 
    id: identificador único del pedido
    customer_id: cliente que realiza el pedido
    restaurant_id: restaurante del que procede el pedido
    reservation_id: reserva asociada al pedido (opcional)
    total_amount: monto total del pedido
    status: estado del pedido (pendiente, en preparación, entregado, etc.)
    delivery_address: dirección de entrega (para pedidos a domicilio)
    order_type: tipo de pedido (en local, para llevar, a domicilio)
    created_at: fecha de creación del pedido
 */

export const orders = sqliteTable('orders', {
      id: text('id').primaryKey().notNull(),
      customer_id: text('customer_id').notNull().references(() => customers.id),
      restaurant_id: text('restaurant_id').notNull().references(() => restaurant.id), // Restaurante de origen
      reservation_id: text('reservation_id').references(() => reservations.id), // Ahora opcional
      total_amount: integer('total_amount').notNull(),
      status: text('status').notNull(),
      delivery_address: text('delivery_address'), // Dirección de entrega para pedidos a domicilio
      order_type: text('order_type').notNull(), // Tipo de pedido: en local, para llevar, a domicilio
      created_at: integer('created_at').default(sql`(current_timestamp)`).notNull(),
})