import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"


/* 

    name
    address
    phone_number
    email


 */

export const restaurant = sqliteTable('restaurant', {
      id: text('id').primaryKey().notNull(),
      name: text('name').notNull(),
      address: text('address').notNull(),
      phone_number: integer('phone_number').notNull(),
      email: text('email').notNull(),

});