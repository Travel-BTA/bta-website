// WHY: Seeds the initial janet@travelbta.com admin account.
// Run once after the adminCredentials table is created.
import { createConnection } from "mysql2/promise";
import bcrypt from "bcryptjs";

const url = process.env.DATABASE_URL;
if (!url) { console.error("DATABASE_URL not set"); process.exit(1); }

const EMAIL = "janet@travelbta.com";
const PASSWORD = "BTAja201!!!";
const NAME = "Janet";

const connection = await createConnection(url);

// Check if already exists
const [rows] = await connection.execute(
  "SELECT id FROM adminCredentials WHERE email = ?",
  [EMAIL]
);

if (rows.length > 0) {
  // Update password in case it changed
  const hash = await bcrypt.hash(PASSWORD, 12);
  await connection.execute(
    "UPDATE adminCredentials SET passwordHash = ?, name = ?, active = 1 WHERE email = ?",
    [hash, NAME, EMAIL]
  );
  console.log(`Admin account updated for ${EMAIL}`);
} else {
  const hash = await bcrypt.hash(PASSWORD, 12);
  await connection.execute(
    "INSERT INTO adminCredentials (email, passwordHash, name, active) VALUES (?, ?, ?, 1)",
    [EMAIL, hash, NAME]
  );
  console.log(`Admin account created for ${EMAIL}`);
}

await connection.end();
process.exit(0);
