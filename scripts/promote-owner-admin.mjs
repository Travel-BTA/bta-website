/**
 * promote-owner-admin.mjs
 * Promotes the site owner (identified by OWNER_OPEN_ID) to admin role.
 * Run once: node scripts/promote-owner-admin.mjs
 */

import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;
const OWNER_OPEN_ID = process.env.OWNER_OPEN_ID;

if (!DATABASE_URL) {
  console.error("DATABASE_URL is not set");
  process.exit(1);
}

if (!OWNER_OPEN_ID) {
  console.error("OWNER_OPEN_ID is not set");
  process.exit(1);
}

const conn = await mysql.createConnection(DATABASE_URL);

try {
  // Check if the owner user exists
  const [rows] = await conn.execute(
    "SELECT id, name, email, role FROM users WHERE openId = ?",
    [OWNER_OPEN_ID]
  );

  if (rows.length === 0) {
    console.log("Owner user not found in the database yet.");
    console.log("Please log in to the site first, then run this script again.");
    process.exit(0);
  }

  const user = rows[0];
  console.log(`Found user: ${user.name ?? user.email ?? "unknown"} (id: ${user.id}, current role: ${user.role})`);

  if (user.role === "admin") {
    console.log("User is already an admin. No changes needed.");
    process.exit(0);
  }

  // Promote to admin
  await conn.execute(
    "UPDATE users SET role = 'admin' WHERE openId = ?",
    [OWNER_OPEN_ID]
  );

  console.log(`SUCCESS: ${user.name ?? user.email ?? "User"} has been promoted to admin.`);
  console.log("You can now access the Page Builder at /admin/pages");
} finally {
  await conn.end();
}
