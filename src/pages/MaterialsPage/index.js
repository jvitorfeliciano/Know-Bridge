import { useParams } from "react-router-dom";

export default function MaterialsPage() {
    const { subfieldId } = useParams();

    return <div>Hello World {subfieldId}</div>;
}
