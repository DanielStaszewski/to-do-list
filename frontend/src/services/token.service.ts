import type { User } from "@/models/user.model";

class TokenService{

    getLocalRefreshToken(): string | null{
        const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string) : null;
        return user?.refreshToken;
    }

    getLocalAccessToken(): string | null{
        const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string) : null;
        return user?.accessToken;
    }

    updateLocalAccessToken(token: string): void{
        let user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string) : null;
        if(!user) return;
        user.accessToken = token;
        localStorage.setItem("user", JSON.stringify(user));
    }

    getUser(): User | null {
        return localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string) : null;
    }

    setUser(user: User): void {
        localStorage.setItem("user", JSON.stringify(user));
    }

    removeUser(): void {
        localStorage.removeItem("user");
    }

}

export default new TokenService();