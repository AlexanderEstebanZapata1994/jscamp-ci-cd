export type User = {
    id: number;
    name: string;
    email?: string;
    age: number;
}

export type Configuration = {
    readonly apiKey: string
    readonly theme: 'light' | 'dark' | 'system';
}