// =============================================
// ============= Basics ======================
// =============================================

// Function declaration
function addTwoNumbers(a: number, b: number): number {
    return a + b;
}

// Function expression
const addTwoNumbers2 = function(a: number, b: number): number {
    return a + b;
}

// Arrow function with body and explicit return type
const addTwoNumbers3 = (a: number, b: number): number => {
    return a + b;
}

// Arrow function with implicit return
const addTwoNumbers4 = (a: number, b: number): number => a + b;

// Arrow function with implicit return and type inference
const addTwoNumbers5 = (a: number, b: number) => a + b;


//Arrow function with optional parameters
const addTwoNumbers6 = (a: number, b: number, c?: number): number => {
    return a + b + (c || 0);
}

//Arrow function with default parameters
const addTwoNumbers7 = (a: number, b: number, c: number = 0): number => {
    return a + b + c;
}

//Arrow function with rest parameters
const sumNumbers = (...numbers: number[]): number => numbers.reduce((acc, curr) => acc + curr, 0);

//Arrow function with type inference
type Operation = (a: number, b: number) => number;
const sumUpNumbers: Operation = (a, b) => a + b;
const subtractNumbers2: Operation = (a, b) => a - b;
const multiplyNumbers2: Operation = (a, b) => a * b;
const divideNumbers2: Operation = (a, b) => a / b;
