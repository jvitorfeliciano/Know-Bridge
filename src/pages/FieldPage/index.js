import { useParams } from "react-router-dom";
import MainContainer from "../../components/MainContainer";
import Subfield from "./Subfield";
import styled from "styled-components";
import useReadFieldById from "../../hooks/api/useReadFieldById";
import SkeletonLoading from "../../components/SkeletionLoading/SkeletonLoading";

export default function FieldPage() {
    const { fieldId } = useParams();
    const { fieldLoading, field } = useReadFieldById(fieldId);

    if (fieldLoading) {
        return <SkeletonLoading />;
    }

    return (
        <MainContainer>
            <Subfields>
                {field.subfields.map((subfield) => (
                    <Subfield subfield={subfield} key={subfield.id} />
                ))}
            </Subfields>
        </MainContainer>
    );
}

const Subfields = styled.div`
    width: 670px;
    height: auto;
`;
