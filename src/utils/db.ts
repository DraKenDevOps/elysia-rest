import { Pool } from "pg";
// import { createPool } from "mysql2/promise";
import env from "../env";

// const db = createPool({
//     uri: env.DATABASE_URL,
//     password: env.DB_PASS
// })

const db = new Pool({
    connectionString: env.DATABASE_URL
});

db.on("error", err => {
    console.error(new Date() + " ERROR -- Unexpected error on idle client", JSON.stringify(err));
});

db.query("SET TIME ZONE 'Asia/Bangkok';").catch(error => console.error(JSON.stringify(error)));

export default db;
