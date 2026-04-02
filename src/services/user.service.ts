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
    });

    if (response.ok) {
        return true;
    
    } else if (response.status === 401) {
        throw new Error('Unauthorized');
    }

    return false;
}

export async function getList() {
    const signed = await getAuthUser();

    const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${signed?.token}`,
        },
    });

    if (response.ok) {
        return await response.json();
    
    } else {
        throw new Error('Unauthorized');
    }
}

export async function update(user: User) {
    const signed = await getAuthUser();

    const response = await fetch(`${API_URL}/${user.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${signed?.token}`,
        },
        body: JSON.stringify(user),
    });

    if (response.ok) {
        return true;
    
    } else if (response.status === 401) {
        throw new Error('Unauthorized');
    }

    return false;
}

export async function remove(id: number) {
    const signed = await getAuthUser();

    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${signed?.token}`,
        }
    });

    if (response.ok) return true;
    
    throw new Error('Unauthorized');
}
