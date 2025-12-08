import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router";

export const useRouter = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const navigateTo = useCallback((path) => {
        navigate(path);
    }, [navigate]);

    return { currentPath: location.pathname, navigateTo };
}