// WHY: Run the siteContent table creation directly, bypassing the Drizzle
// migrator which fails on earlier TiDB-incompatible migrations.
import { createConnection } from "mysql2/promise";

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL is not set");
  process.exit(1);
}

const connection = await createConnection(url);

const sql = `
CREATE TABLE IF NOT EXISTS \`siteContent\` (
  \`id\` int AUTO_INCREMENT NOT NULL,
  \`key\` varchar(300) NOT NULL,
  \`label\` varchar(300) NOT NULL,
  \`page\` varchar(100) NOT NULL,
  \`section\` varchar(100) NOT NULL,
  \`fieldType\` enum('text','textarea','image') NOT NULL DEFAULT 'text',
  \`value\` text,
  \`updatedBy\` int,
  \`createdAt\` timestamp NOT NULL DEFAULT (now()),
  \`updatedAt\` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT \`siteContent_id\` PRIMARY KEY(\`id\`),
  CONSTRAINT \`siteContent_key_unique\` UNIQUE(\`key\`)
);
`;

try {
  await connection.execute(sql);
  console.log("siteContent table created (or already exists).");
} catch (err) {
  console.error("Error creating table:", err.message);
  process.exit(1);
}

await connection.end();
process.exit(0);
