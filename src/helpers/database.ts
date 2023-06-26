
import { Client, Database, PostgresConnector } from "../../deps.ts";

const connector = new PostgresConnector({
  // user: Deno.env.get('DB_USER'),
  // database: Deno.env.get('DB_NAME'),
  // hostname: Deno.env.get('DB_HOSTNAME'),
  // password: Deno.env.get('DB_PASSWORD'),
  // port: parseInt(Deno.env.get('DB_PORT')!)
  user: 'gertea',//// Deno.env.get('DB_USER'),
  database: 'trunk',// Deno.env.get('DB_NAME'),
  hostname: 'localhost',// Deno.env.get('DB_HOSTNAME'),
  password: 'gerteasecret',// Deno.env.get('DB_PASSWORD'),
  port: 5432
});

const db = new Database(connector);


// await database.connect();

export default db;

