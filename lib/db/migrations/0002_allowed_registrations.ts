import { pgTable, text, varchar, boolean } from 'drizzle-orm/pg-core';

export async function up(db) {
  await db.schema.createTable('allowed_registrations', (table) => {
    table.varchar('id').primaryKey();
    table.text('domain').unique();
    table.text('email').unique();
    table.boolean('is_active').notNull().default(true);
  });
}

export async function down(db) {
  await db.schema.dropTable('allowed_registrations');
} 