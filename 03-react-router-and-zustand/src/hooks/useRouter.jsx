
import { useLocation, useNavigate } from "react-router";

export const useRouter = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const navigateTo = (path) => {
        navigate(path);
    }

    return { currentPath: location.pathname, navigateTo };
}