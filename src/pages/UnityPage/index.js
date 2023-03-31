import { useParams } from "react-router-dom";

export default function UnityPage() {
    const { unityId } = useParams();

    return <div>Hello World {unityId}</div>;
}
