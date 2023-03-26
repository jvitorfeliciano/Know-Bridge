import { Navigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

export default function ProtectedRouteGuard({ children }) {
    const token = useToken();

    if (!token) {
        return <Navigate to="/sign-in" />;
    }

    return <>{children}</>;
}
