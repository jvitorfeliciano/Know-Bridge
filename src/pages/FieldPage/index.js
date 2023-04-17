import { useParams } from "react-router-dom";
import MainContainer from "../../components/MainContainer";
import Subfield from "./Subfield";
import styled from "styled-components";
import useReadFieldById from "../../hooks/api/useReadFieldById";
import SkeletonLoading from "../../components/SkeletionLoading/SkeletonLoading";
import Legend from "../../components/Legend";
import colorDictionary from "../../constants/colors";

export default function FieldPage() {
    const { fieldId } = useParams();
    const { fieldLoading, field } = useReadFieldById(fieldId);

    if (fieldLoading) {
        return <SkeletonLoading />;
    }

    return (
        <Container>
            <Legend>{field.title}</Legend>
            <Subfields>
                {field.subfields.map((subfield) => (
                    <Subfield subfield={subfield} key={subfield.id} />
                ))}
            </Subfields>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 60px);
    background: ${colorDictionary.lightGray};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
`;

const Subfields = styled.div`
    width: 670px;
    height: auto;
    @media (max-width: 700px) {
        width: 100%;
    }
`;
