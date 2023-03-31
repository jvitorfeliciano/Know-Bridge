import { useParams } from "react-router-dom";
import styled from "styled-components";
import SkeletonLoading from "../../components/SkeletionLoading/SkeletonLoading";
import colorDictionary from "../../constants/colors";
import useReadTrailById from "../../hooks/api/useReadTrailById";
import FieldProgress from "./FieldProgress";
import Unity from "./Unity";

export default function TrailPage() {
    const { trailId } = useParams();
    const { trailLoading, trail } = useReadTrailById(trailId);

    if (trailLoading) {
        return <SkeletonLoading />;
    }

    return (
        <Container>
            <TrailSummary>
                <Title>Resumo do curso</Title>
                {trail.fields.map((field) => (
                    <FieldProgress key={field.id} field={field} />
                ))}
            </TrailSummary>
            <Unities>
                {trail.fields.map((field) => (
                    <Unity key={field.id} field={field} />
                ))}
            </Unities>
        </Container>
    );
}

const Container = styled.main`
    width: 100vw;
    height: calc(100vh - 60px);
    background: ${colorDictionary.lightGray};
    display: flex;
    justify-content: center;
`;

const TrailSummary = styled.section`
    width: 205px;
    height: auto;
    color: ${colorDictionary.gray};
    font-family: "Inter";
    font-style: normal;
    margin-top: 30px;
`;

const Title = styled.h2`
    width: 100%;
    border-bottom: 1px solid rgba(33, 36, 44, 0.16);
    padding-bottom: 15px;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`;

const Unities = styled.section`
    width: 670px;
    height: auto;
    margin-left: 80px;
`;
