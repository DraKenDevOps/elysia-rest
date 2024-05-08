import { JwtPayload } from "jsonwebtoken"
// import { RowDataPacket } from 'mysql2'

export interface IJWTPayload extends JwtPayload {
    username: string | null
    user_id: number | null
}

// declare global {
//     namespace Elysia {
//         export interface Context {
//             tokenPayload: IJWTPayload
//         }
//     }
// }

export {}