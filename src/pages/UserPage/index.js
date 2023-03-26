import { useParams } from "react-router-dom";

export default function UserPage() {
    const { userName } = useParams();

    return <div>Olá {userName}</div>;
}
