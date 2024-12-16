import { pgTable, text, varchar, boolean } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export async function up(db) {
  await db.execute(sql`
    INSERT INTO allowed_registrations (id, email, is_active) 
    VALUES (gen_random_uuid(), 'hemicl2@gmail.com', true)
    ON CONFLICT (email) DO NOTHING;
  `);
}

export async function down(db) {
  await db.execute(sql`
    DELETE FROM allowed_registrations 
    WHERE email = 'hemicl2@gmail.com';
  `);
} 