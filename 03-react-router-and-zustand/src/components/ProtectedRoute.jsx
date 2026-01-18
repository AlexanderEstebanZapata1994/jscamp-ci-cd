import { useAuthStore } from '../store/useAuthStore.jsx';
import { Navigate } from 'react-router';

export function ProtectedRoute({ children }) {
    const { isLoggedIn } = useAuthStore();

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />
    }

    return children;
}