// app.ts
import { Application, Router } from "./deps.ts";
import { Client } from "./deps.ts";
// import errorHandler from "./src/errors/errorHandler.ts";
import router from "./src/routes/routes.ts";

const app = new Application();
const router = new Router();


// Example route
router.get("/", (ctx) => {
  ctx.response.body = "Hello, Deno!";
});

// Add the router as a middleware
app.use(router.routes());

// Start the server
const port = 8080;
console.log(`Server running on port ${port}`);
await app.listen({ port });
``
