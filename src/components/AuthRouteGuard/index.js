import { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../../contexts/userContext";

export default function AuthRouteGuard({ children }) {
    const { userData } = useContext(UserContext);

    console.log(userData);
    if (userData) {
        return <Navigate to={`/user/${userData.userName}`} />;
    }

    return <>{children}</>;
}
