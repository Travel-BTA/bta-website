// WHY: Creates the adminCredentials table directly via SQL, bypassing the
// Drizzle migrator which fails on earlier TiDB-incompatible migrations.
// Also seeds the initial janet@travelbta.com admin account.
import { createConnection } from "mysql2/promise";
import { createHash } from "crypto";

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL is not set");
  process.exit(1);
}

const connection = await createConnection(url);

// Create the table
await connection.execute(`
  CREATE TABLE IF NOT EXISTS \`adminCredentials\` (
    \`id\` int AUTO_INCREMENT NOT NULL,
    \`email\` varchar(320) NOT NULL,
    \`passwordHash\` varchar(255) NOT NULL,
    \`name\` varchar(200) NOT NULL DEFAULT '',
    \`active\` tinyint(1) NOT NULL DEFAULT 1,
    \`createdAt\` timestamp NOT NULL DEFAULT (now()),
    \`updatedAt\` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT \`adminCredentials_id\` PRIMARY KEY(\`id\`),
    CONSTRAINT \`adminCredentials_email_unique\` UNIQUE(\`email\`)
  )
`);
console.log("adminCredentials table created (or already exists).");

await connection.end();
process.exit(0);
