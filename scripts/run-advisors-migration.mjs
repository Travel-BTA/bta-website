/**
 * run-advisors-migration.mjs
 * Creates the advisors table in the database (TiDB-compatible — no json defaults).
 */

import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) { console.error("DATABASE_URL not set"); process.exit(1); }

const conn = await mysql.createConnection(DATABASE_URL);

try {
  await conn.execute(`
    CREATE TABLE IF NOT EXISTS \`advisors\` (
      \`id\` int AUTO_INCREMENT NOT NULL,
      \`slug\` varchar(200) NOT NULL,
      \`name\` varchar(200) NOT NULL,
      \`title\` varchar(300) NOT NULL DEFAULT '',
      \`tagline\` text,
      \`heroImage\` text,
      \`badges\` json,
      \`ctaPrimary\` json,
      \`ctaSecondary\` json,
      \`photoMain\` text,
      \`photoAccent\` text,
      \`meetEyebrow\` varchar(100) DEFAULT '',
      \`meetHeading\` text,
      \`bio\` json,
      \`meetQuote\` text,
      \`stats\` json,
      \`hotels\` json,
      \`specialties\` json,
      \`pillars\` json,
      \`experiences\` json,
      \`whyWorkBenefits\` json,
      \`whyWorkImage\` text,
      \`testimonials\` json,
      \`closingBannerImage\` text,
      \`closingBannerQuote\` text,
      \`email\` varchar(320),
      \`published\` boolean NOT NULL DEFAULT false,
      \`sortOrder\` int NOT NULL DEFAULT 0,
      \`createdAt\` timestamp NOT NULL DEFAULT (now()),
      \`updatedAt\` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
      CONSTRAINT \`advisors_id\` PRIMARY KEY(\`id\`),
      CONSTRAINT \`advisors_slug_unique\` UNIQUE(\`slug\`)
    )
  `);
  console.log("SUCCESS: advisors table created (or already exists).");
} catch (err) {
  console.error("Migration failed:", err.message);
  process.exit(1);
} finally {
  await conn.end();
}
