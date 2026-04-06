// WHY: Run pending Drizzle migrations against the live database.
// Usage: node scripts/migrate.mjs
import { drizzle } from "drizzle-orm/mysql2";
import { migrate } from "drizzle-orm/mysql2/migrator";
import { createConnection } from "mysql2/promise";

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL is not set");
  process.exit(1);
}

const connection = await createConnection(url);
const db = drizzle(connection);

console.log("Running migrations…");
await migrate(db, { migrationsFolder: "./drizzle" });
console.log("Migrations complete.");

await connection.end();
process.exit(0);
