import { sql } from "drizzle-orm";
import { int, text, mysqlTable, mysqlSchema, datetime, timestamp, date } from "drizzle-orm/mysql-core";

export const testTable = mysqlTable("test_table", {
    id: int("id").primaryKey().autoincrement(), 
    bookedOn: date("booked_on", {mode: "string"}).notNull(), //TZなし
    bookedAt: datetime("booked_at").notNull(), // UTC ?
    createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(), // UTC
    updatedAt: datetime("updated_at").default(sql`CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP`) // UTC
  });