export interface User {
    name: string;
    username: string;
    
    id?: number;
    password?: string;
    token?: string;
    roles?: string[];
}