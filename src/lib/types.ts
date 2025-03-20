import {z} from "zod";
import { createInsertSchema } from "drizzle-zod";

import {customers, menu_items, order_items,orders, reservations,restaurant} from "../db/schema/index.ts";

// Zod schemas from database tables

/* 
    id
    first_name
    last_name
    email
    phone_number
    created_at


 */

export const CustomerSchema = createInsertSchema(customers,{
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email(),
    phone_number: z.string(),
}).omit({created_at: true , id: true});

/* 
    id
    name
    description
    price
    category
 */

export const MenuItemsSchema = createInsertSchema(menu_items,{
    name: z.string(),
    price: z.number().int(),
    description: z.string(),
    category: z.string(),
}).omit({id: true});

/* 
    id
    order_id
    menu_item_id
    quantity
    price

 */

export const OrderItemsSchema = createInsertSchema(order_items,{
    order_id: z.string().uuid(),
    menu_item_id: z.string().uuid(),
    quantity: z.number().int(),
    price: z.number().int(),
}).omit({id: true});

/* 
    id
    customer_id
    reservation_id
    total_amount
    status
    created_at

 */

export const OrdersSchema = createInsertSchema(orders,{
    customer_id: z.string().uuid(),
    reservation_id: z.string().uuid(),
    total_amount: z.number().int(),
    status: z.string(),
}).omit({created_at: true , id: true});

/* 
    id
    customer_id
    reservation_date
    number_of_people
    special_requests
    status
    created_at


 */

export const ReservationsSchema = createInsertSchema(reservations,{
    customer_id: z.string().uuid(),
    reservation_date: z.number().int(),
    number_of_people: z.number().int(),
    special_requests: z.string(),
    status: z.string(),
}).omit({created_at: true , id: true});


/* 

    name
    address
    phone_number
    email


 */

export const RestaurantSchema = createInsertSchema(restaurant,{
    id: z.string().uuid(),
    name: z.string(),
    address: z.string(),
    phone_number: z.string(),
    email: z.string().email(),
});