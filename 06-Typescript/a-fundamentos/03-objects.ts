// =============================================
// ============= Objects ======================
// =============================================
import { Configuration, User } from './00-types';
// Types

// type User = {
//     id: number;
//     name: string;
//     email?: string;
//     age: number;
// }

// Objecto con propiedades y valores
let user: User = { id: 1, name: 'John', age: 20 };

// Objecto con propiedades y valores opcionales
let userWithOptional: User = { id: 1, name: 'John', age: 20, email: 'john@example.com' };

// Objecto con propiedades y valores opcionales y por defecto
let userWithOptionalAndDefault: User = { id: 1, name: 'John', age: 20, email: 'john@example.com' };

// Configuration
let configuration: Configuration = { apiKey: '1234567890', theme: 'system' };

// configuration.apiKey = '0987654321'; // Error: apiKey is readonly

const userConfig: User & Configuration = { 
    id: 1, 
    name: 'John', 
    age: 20, 
    email: 'john@example.com', 
    apiKey: '1234567890', 
    theme: 'system' 
};

const userConfig2: User & Configuration = { 
    id: 1, 
    name: 'John', 
    age: 20, email: 'john@example.com', 
    theme: 'system', 
    apiKey: '1234567890'
};

type Translations = {
    [key: string]: string;
}

const traslationsLanguages: Translations = {
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour',
    de: 'Hallo',
    it: 'Ciao',
    pt: 'Olá',
    ru: 'Привет',
    ja: 'こんにちは',
    ko: '안녕하세요',
    zh: '你好',
}