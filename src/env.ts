import { name, version } from "../package.json"

export default {
    PWD: process.cwd(),
    VERSION: version,
    SERVICE_NAME: name || "rest-api",
    NODE_ENV: Bun.env.NODE_ENV,
    TZ: Bun.env.TZ || "Asia/Bangkok",
    HOST: Bun.env.HOST,
    PORT: Number(Bun.env.PORT) || 8000,
    BASE_PATH: Bun.env.BASE_PATH || "api",
    DB_HOST: Bun.env.DB_HOST as string,
    DB_USER: Bun.env.DB_USER as string,
    DB_PASS: Bun.env.DB_PASS as string,
    DB_PORT: Number(Bun.env.DB_PORT) || 3306,
    DB_SCHEMA: Bun.env.DB_SCHEMA as string,
    DATABASE_URL: Bun.env.DATABASE_URL,
}