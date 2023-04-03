import { useParams } from "react-router-dom";
import SkeletonLoading from "../../components/SkeletionLoading/SkeletonLoading";
import useReadSubfieldById from "../../hooks/api/useReadSubfieldById";

export default function MaterialsPage() {
    const { subfieldId } = useParams();
    const { subfieldLoading, subfield } = useReadSubfieldById(subfieldId);

    console.log(subfield);

    if (subfieldLoading) {
        return <SkeletonLoading />;
    }
    
    return <div>Hello World {subfieldId}</div>;
}
