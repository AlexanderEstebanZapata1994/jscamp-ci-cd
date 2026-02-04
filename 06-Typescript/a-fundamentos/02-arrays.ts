// =============================================
// ============= Arrays ========================
// =============================================

// Array de strings
let fruits: string[] = ['apple', 'banana', 'cherry'];

// Array de números
let numbers: number[] = [1, 2, 3, 4, 5];

// Array de booleanos
let booleans: boolean[] = [true, false, true];

// Array de objetos
let users: { id: number, name: string }[] = [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}, {id: 3, name: 'Jim'}];

// Array de cualquier tipo
let mixed: (string | number | boolean)[] = ['apple', 1, true];

// Array de tipos genéricos
let genericArray: Array<string | number> = ['apple', 1];

// Array de tipos genéricos con restricciones
let genericArrayWithConstraints: Array<string | number> = ['apple', 1];
