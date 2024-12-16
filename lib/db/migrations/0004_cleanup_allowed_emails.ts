import { sql } from 'drizzle-orm';

export async function up(db) {
  // Clear existing allowed registrations
  await db.execute(sql`DELETE FROM allowed_registrations`);
  
  // Add only hemicl2@gmail.com
  await db.execute(sql`
    INSERT INTO allowed_registrations (id, email, is_active) 
    VALUES (gen_random_uuid(), 'hemicl2@gmail.com', true);
  `);
}

export async function down(db) {
  await db.execute(sql`DELETE FROM allowed_registrations`);
} 