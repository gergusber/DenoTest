// deps.ts
// export { Application, Router } from "https://deno.land/x/oak@v12.5.0/mod.ts";
// export { Client } from "https://deno.land/x/postgres/mod.ts";

export { Application, Router } from "https://deno.land/x/oak/mod.ts";
// export { DataTypes, Database, Model } from "https://deno.land/x/denodb/mod.ts";
export { Client } from "https://deno.land/x/postgres/mod.ts";
export { oakCors } from "https://deno.land/x/cors/mod.ts";
export { DataTypes, Database, Model, PostgresConnector } from 'https://deno.land/x/denodb/mod.ts';