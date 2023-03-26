import { useParams } from "react-router-dom";
import useToken from "../../hooks/useToken";

export default function UserPage() {
    const token =  useToken();
    console.log(token)
    const { userName } = useParams();

    return <div>Olá {userName}</div>;
}
