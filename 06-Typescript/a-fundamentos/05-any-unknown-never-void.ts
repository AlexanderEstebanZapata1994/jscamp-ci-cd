// =============================================
// ============= Any, Unknown, Never, Void ===
// =============================================

// Any
let anyValue: any = 'Hello';
anyValue = 123;
anyValue = true;
anyValue = { name: 'John' };
anyValue = [1, 2, 3];
anyValue = () => { return 'Hello'; };

// Unknown

let unknownValue: unknown = 'Hello';
unknownValue = 123;
unknownValue = true;
unknownValue = { name: 'John' };
unknownValue = [1, 2, 3];
unknownValue = () => { return 'Hello'; };

// unknownValue.toUpperCase(); // Error: unknownValue is of type 'unknown'
if (typeof unknownValue === 'string') { // type narrowing by type guard
    unknownValue.toUpperCase(); // Now it is of type 'string' inside of the if statement
}
// Never

let neverValue: never;
// neverValue = (() => { throw new Error('Error'); })();

// Void
let voidValue: void;
voidValue = undefined;
voidValue = null as any; // any is a type that can be anything
voidValue = () => { return 'Hello'; } as any; // any is a type that can be anything

// voidValue.toUpperCase(); // Error: voidValue is of type 'void'
// if (typeof voidValue === 'string') { // type narrowing by type guard
//     voidValue.toUpperCase(); // Now it is of type 'string' inside of the if statement
// }