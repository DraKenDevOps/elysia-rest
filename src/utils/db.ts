import { createPool } from "mysql2/promise";
import env from "../env"

const db = createPool({
    uri: env.DATABASE_URL,
    password: env.DB_PASS
})

export default db;