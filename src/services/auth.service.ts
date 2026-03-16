import { User } from "../models";
import { setAuthUser } from "./auth.repo";

const API_URL = 'http://192.168.0.9:3030/auth';

export async function login(username: string, password: string) {

    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })

    if (response.ok) {
        const data : User = await response.json();
        await setAuthUser(data)

        return true; // Retorna o token de autenticação
    }

    return false;
}