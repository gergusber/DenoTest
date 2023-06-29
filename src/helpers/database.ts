
import { Client } from "../../deps.ts";
import "https://deno.land/x/dotenv/load.ts";

const connector = new Client({
  // user: Deno.env.get('DB_USER'),
  // database: Deno.env.get('DB_NAME'),
  // hostname: Deno.env.get('DB_HOSTNAME'),
  // password: Deno.env.get('DB_PASSWORD'),
  // port: parseInt(Deno.env.get('DB_PORT')!)
  user: 'gerbertea',//// Deno.env.get('DB_USER'),
  database: 'trunk',// Deno.env.get('DB_NAME'),
  hostname: 'localhost',// Deno.env.get('DB_HOSTNAME'),
  password: 'gerbertea',// Deno.env.get('DB_PASSWORD'),
  port: 5432
});

// const db = new Database(connector);


await connector.connect();

export default connector;

