import type { UserRole } from "./user-role.model"

export interface User {
    id: string,
    name: string,
    surname: string,
    email: string
    image?: any,
    roles: UserRole[]
}