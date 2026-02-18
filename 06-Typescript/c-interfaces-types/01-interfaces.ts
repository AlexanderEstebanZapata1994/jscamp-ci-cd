// =============================================
// ============= Interfaces ======================
// =============================================

// Interfaces are contracts that define the structure of an object

export interface User {
    id: number;
    name: string;
    email?: string;
    age: number;
    config: Configuration;
    greet: () => void;
}

export interface Configuration {
    readonly apiKey: string
    readonly theme: 'light' | 'dark' | 'system';
}


const myUser: User = {
    id: 1,
    name: 'John',
    email: 'john@example.com',
    age: 20,
    config: {
        apiKey: '1234567890',
        theme: "dark"
    },
    greet: () => {
        console.log(`Hello, my name is ${myUser.name}`);
    }
}