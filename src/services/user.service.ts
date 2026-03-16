import { getAuthUser, setAuthUser } from "./auth.repo";

import { User } from "../models";

const API_URL = 'http://192.168.0.9:3030/users';

export async function create(user: User) {
    const signed = await getAuthUser();

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${signed?.token}`,
        },
        body: JSON.stringify(user),
    })

    if (response.ok) {
        return true;
    
    } else if (response.status === 401) {
        throw new Error('Unauthorized');
    }

    return false;
}