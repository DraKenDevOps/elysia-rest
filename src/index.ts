import { Elysia } from "elysia";
import ApiRouter from "./router";
import env from "./env";
// import jwt from './utils/jwt'

const app = new Elysia();

app.get("/", () => ({
    status: "OK",
    uptime: process.uptime(),
    timestamp: Date.now(),
    instance: process.env.NODE_APP_INSTANCE || null
}));

// app.use(jwt)
app.use(ApiRouter);

app.listen({
    hostname: env.HOST,
    port: env.PORT,
    development: env.NODE_ENV == "development"
});

console.info(
    new Date() + " INFO -- REST API is running",
    JSON.stringify({
        hostname: app.server?.hostname,
        port: app.server?.port,
        environment: app.server?.development ? "development" : "production"
    })
);

const signals: Array<NodeJS.Signals> = ["SIGINT", "SIGTERM", "SIGBREAK"];

for (const signal of signals) {
    process.on(signal, () => {
        console.warn(`${signal} signal received.`);
        console.warn(`Closing ${env.SERVICE_NAME} server...`);
        console.warn(`${env.SERVICE_NAME} server is closed.`);
        process.exit(0);
    });
}
