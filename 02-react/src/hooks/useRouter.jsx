import { useState, useEffect } from "react";

export const useRouter = () => {
const [currentPath, setCurrentPath] = useState(window.location.pathname);

const handleLocationChange = () => {
    setCurrentPath(window.location.pathname);
}

useEffect(() => {
    window.addEventListener('popstate', handleLocationChange);

    return () => {
        window.removeEventListener('popstate', handleLocationChange);
    }
}, [currentPath]);

const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'))
}

return { currentPath, navigateTo };
}