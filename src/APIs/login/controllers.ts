import { type Context } from "elysia";
import { sign } from "../../utils/jwt";
import crypto from "crypto";
import { findUserService } from "./services";

export async function loginController(req: Context) {
    console.log(req.body);
    const { username, password } = req.body as any;

    const user = await findUserService(username);
    const hashed = crypto.createHash("md5").update(password).digest("hex");

    if (!user) return { status: "error" ,message: "Not found" };
    if (hashed !== user["password"]) return { status: "error" ,message: "Password incorrect" };
    const token = sign({ username });

    return {
        status: "success",
        username,
        token
    };

    // try {
    //     const result = await db.query("INSERT INTO test_01.users(username, password) VALUES ($1, $2) RETURNING *", [username, hashed]);
    //     console.log("PG sql result:", result.rows);

    // } catch (error) {
    //     console.error(JSON.stringify(error));
    //     return {
    //         status: "error"
    //     };
    // }
}
