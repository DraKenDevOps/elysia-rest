import { Elysia } from "elysia";
import env from "./env";
import { loginController } from "./APIs/login/controllers";
// import jwt from './utils/jwt'

const router = new Elysia({ prefix: `${env.BASE_PATH}/v1` });

router.get("/refresh", () => {
    return {
        message: "Authorized"
    };
});

router.post("/login", loginController);

// router.use(jwt).post("/login", async (req) => {
//     const token = await req.jwt.sign(req.body as any)
//     req.cookie.auth.set({
//         value: token,
//         httpOnly: true,
//         maxAge: 7 * 86400,
//         path: '/profile',
//     })

//     return req.cookie.auth.value
// });

export default router;
