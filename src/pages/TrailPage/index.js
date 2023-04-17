import { useParams } from "react-router-dom";
import styled from "styled-components";
import SkeletonLoading from "../../components/SkeletionLoading/SkeletonLoading";
import colorDictionary from "../../constants/colors";
import useReadTrailById from "../../hooks/api/useReadTrailById";
import FieldProgress from "../../components/FieldProgress";
import Field from "./Field";

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
                    <FieldProgress key={field.id} data={field} />
                ))}
            </TrailSummary>
            <Fields>
                {trail.fields.map((field) => (
                    <Field key={field.id} field={field} />
                ))}
                {trail.fields.map((field) => (
                    <Field key={field.id} field={field} />
                ))}
                {trail.fields.map((field) => (
                    <Field key={field.id} field={field} />
                ))}
                {trail.fields.map((field) => (
                    <Field key={field.id} field={field} />
                ))}
                {trail.fields.map((field) => (
                    <Field key={field.id} field={field} />
                ))}
            </Fields>
        </Container>
    );
}

const Container = styled.main`
    width: 100vw;
    height: calc(100vh - 60px);
    background: ${colorDictionary.lightGray};
    display: flex;
    justify-content: center;
    overflow-y: auto;
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

const Fields = styled.section`
    height: 100%;
    width: 670px;
    margin-left: 80px;
`;
