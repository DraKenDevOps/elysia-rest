import db from "../../utils/db";

export async function findUserService(username: string) {
    try {
        const result = await db.query("SELECT password FROM test_01.users WHERE username = $1", [username]);
        const [user] = result.rows
        return user as { password: string };
    } catch (error) {
        console.error(new Date() + " ERROR -- find user --", JSON.stringify(error));
        return null;
    }
}
