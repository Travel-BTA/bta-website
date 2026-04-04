import { createConnection } from 'mysql2/promise';
import { config } from 'dotenv';
config();

const conn = await createConnection(process.env.DATABASE_URL);
const [rows] = await conn.execute('SHOW TABLES');
console.log('All tables:', rows.map(r => Object.values(r)[0]));
await conn.end();
