import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key);
        const initial = initialValue();
        if (initial !== null) return initial;
        if (jsonValue !== null) return JSON.parse(jsonValue);
        return initial;
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
}