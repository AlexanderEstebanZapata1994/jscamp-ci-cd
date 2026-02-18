// =============================================
// ============= Type Narrowing ======================
// =============================================

// Type Narrowing by type guard
const addTwoNumbers = (value: number | string): number => {
    if (typeof value === 'number') {
        return value + 2;
    }
    return parseInt(value) + 2;
}

//type narrowing with falsy values
const addTwoNumbers2 = (value: number | null | undefined): number => {
    if (value) {
        return value + 2;
    }
    return 0;
}

//type narrowing with default parameters
const addTwoNumbers3 = (value: number = 0): number => {
    return value + 2;
}

// instanceof type narrowing
const formatDate = (value: Date | string): string => {
    if (value instanceof Date) {
        return value.toISOString();
    }
    return new Date(value).toISOString();
}