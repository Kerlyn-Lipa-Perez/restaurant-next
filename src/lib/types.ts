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
    first_name: z.string().min(2).max(50),
    last_name: z.string().min(2).max(50),
    email: z.string().email().max(100),
    phone_number: z.string().regex(/^\+?[1-9]\d{1,14}$/).min(9).max(9),
}).omit({created_at: true , id: true});

/* 
    id
    name
    description
    price
    category
 */

export const MenuItemsSchema = createInsertSchema(menu_items,{
    name: z.string().min(2).max(100),
    price: z.number().positive().max(1000),
    description: z.string().max(500).optional(),
    category: z.string().min(3).max(50),
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
    quantity: z.number().int().min(1).max(100),
    price: z.number().positive().max(1000),
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
    reservation_id: z.string().uuid().nullable(),
    total_amount: z.number().positive().max(1000000),
    status: z.enum(["pending", "confirmed", "cancelled", "completed"]),
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
    reservation_date: z.coerce.date().min(new Date()),
    number_of_people: z.number().int().min(1).max(50),
    special_requests: z.string().max(500).optional(),
    status: z.enum(["pending", "confirmed", "cancelled"]),
}).omit({created_at: true , id: true});


/* 

    name
    address
    phone_number
    email


 */

export const RestaurantSchema = createInsertSchema(restaurant,{
    id: z.string().uuid(),
    name: z.string().min(2).max(100),
    address: z.string().min(5).max(255),
    phone_number: z.string().regex(/^\+?[1-9]\d{1,14}$/).min(9).max(9),
    email: z.string().email().max(100),
});