"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertContactMessageSchema = exports.insertUserSchema = exports.contactMessages = exports.users = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_zod_1 = require("drizzle-zod");
exports.users = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    username: (0, pg_core_1.text)("username").notNull().unique(),
    password: (0, pg_core_1.text)("password").notNull(),
});
exports.contactMessages = (0, pg_core_1.pgTable)("contact_messages", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.text)("name").notNull(),
    email: (0, pg_core_1.text)("email").notNull(),
    language: (0, pg_core_1.text)("language").notNull(),
    service: (0, pg_core_1.text)("service").notNull(),
    message: (0, pg_core_1.text)("message").notNull(),
    createdAt: (0, pg_core_1.text)("created_at").notNull(),
});
exports.insertUserSchema = (0, drizzle_zod_1.createInsertSchema)(exports.users).pick({
    username: true,
    password: true,
});
exports.insertContactMessageSchema = (0, drizzle_zod_1.createInsertSchema)(exports.contactMessages).omit({
    id: true,
    createdAt: true,
});
