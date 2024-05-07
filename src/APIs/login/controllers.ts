import { type Context } from 'elysia'
import { sign } from '../../utils/jwt';

export async function loginController(req: Context) {
    const username = (req.body as any).username;
    // const password = req.body.password;
    // const token = Buffer.from(JSON.stringify(req.body)).toString("base64")
    const token = sign({ username })
    return {
        username,
        token
    }
}