import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const result = initialValue();
        if (result !== null) return result;
        const jsonValue = localStorage.getItem(key);
        if (jsonValue !== null) return JSON.parse(jsonValue);
        return result;
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
}