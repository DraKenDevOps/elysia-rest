import jwt from "jsonwebtoken";
import { Context } from "elysia";
import env from "../env";

const issuer = "Laogw Ltd";
const subject = "keooudone.n@laogw.la";
const audience = "https://laogw.la";

// import { jwt } from '@elysiajs/jwt'
// const jwtoken = jwt({
//     name: 'jwt',
//     secret: 'Fischl von Luftschloss Narfidort',
//     iss: 'LGW Co,. Ltd',
//     sub: 'evisa',
//     aud: 'evisa',
//     alg: 'RS256',
//     exp: '24h'
// })
// export default jwtoken;

export function sign(payload: object) {
    let token = "";
    try {
        token = jwt.sign(payload, env.JWT_PRIVATE_KEY, {
            issuer,
            subject,
            audience,
            expiresIn: "24h",
            algorithm: "RS256"
        });
    } catch (e) {
        console.error("ERROR Sign token --", e);
    }
    return token;
}

export function verify(req: Context) {
    let token = req.headers["x-access-token"] as string;
    token = req.headers.authorization ? `${req.headers.authorization}`.replace("Bearer ", "") : token;

    if (!token) return { status: "error", message: "No token provided." };

    try {
        const decoded = jwt.verify(token, env.JWT_PUBLIC_KEY, {
            issuer,
            subject,
            audience,
            maxAge: "24h",
            algorithms: ["RS256"]
        }) as any
        // @ts-ignore
        req["tokenPayload"] = decoded
    } catch (e) {
        console.error("ERROR Verify Token --", e);
        return { status: "error", message: "Failed to authenticate token." };
    }
}
