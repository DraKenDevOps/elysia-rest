import { Elysia } from "elysia";
import env from "./env";

const router = new Elysia();

router.group(`${env.BASE_PATH}/v1`, router => {
    router.get("/refresh", () => {
        return {
            message: "Authorized"
        };
    });
    router.post("/token", req => Buffer.from(JSON.stringify(req.body)).toString("base64"));
    return router;
});

// const apiRouter = (router: Elysia) => {
//     router.post("/refresh", req => {
//         return req.body;
//     })
//     return router
// }

export default router;
