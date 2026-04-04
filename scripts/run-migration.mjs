/**
 * WHY: TiDB (used by Manus) does not support JSON column DEFAULT ('[]') syntax.
 * We create the table without a JSON default and handle defaults in application code.
 */
import { createConnection } from 'mysql2/promise';
import { config } from 'dotenv';
config();

const conn = await createConnection(process.env.DATABASE_URL);

// Check if pages table already exists
const [existing] = await conn.execute("SHOW TABLES LIKE 'pages'");
if (existing.length > 0) {
  console.log('pages table already exists — nothing to do.');
  await conn.end();
  process.exit(0);
}

// TiDB-compatible CREATE TABLE — JSON columns cannot have DEFAULT ('[]')
// The application layer always supplies blocks as a JSON string.
const createPagesSql = `
CREATE TABLE \`pages\` (
  \`id\` int AUTO_INCREMENT NOT NULL,
  \`slug\` varchar(200) NOT NULL,
  \`title\` varchar(300) NOT NULL,
  \`status\` enum('draft','published') NOT NULL DEFAULT 'draft',
  \`blocks\` json NOT NULL,
  \`createdBy\` int NOT NULL,
  \`updatedBy\` int NOT NULL,
  \`createdAt\` timestamp NOT NULL DEFAULT (now()),
  \`updatedAt\` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT \`pages_id\` PRIMARY KEY(\`id\`),
  CONSTRAINT \`pages_slug_unique\` UNIQUE(\`slug\`)
)
`;

console.log('Creating pages table...');
await conn.execute(createPagesSql);
console.log('pages table created successfully.');

// Verify
const [tables] = await conn.execute("SHOW TABLES");
console.log('All tables:', tables.map(r => Object.values(r)[0]));

await conn.end();
