import asyncStorage from "@react-native-async-storage/async-storage";

import { User } from "../models";

const AUTH_KEY = "signed";

export async function setAuthUser(user: User) {
    await asyncStorage.setItem(AUTH_KEY, JSON.stringify(user));
}

export async function getAuthUser() {
    const json = await asyncStorage.getItem(AUTH_KEY);
    if (json) return JSON.parse(json) as User;
    return null;
}

export async function clearAuthUser() {
    await asyncStorage.removeItem(AUTH_KEY);
}