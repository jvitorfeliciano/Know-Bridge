import { useParams } from "react-router-dom";
import styled from "styled-components";
import SkeletonLoading from "../../components/SkeletionLoading/SkeletonLoading";
import colorDictionary from "../../constants/colors";
import useReadTrailById from "../../hooks/api/useReadTrailById";
import FieldProgress from "../../components/FieldProgress";
import Field from "./Field";
import Legend from "../../components/Legend";

export default function TrailPage() {
    const { trailId } = useParams();
    const { trailLoading, trail } = useReadTrailById(trailId);

    if (trailLoading) {
        return <SkeletonLoading />;
    }

    return (
        <Container>
            <section>
                <Legend>{trail.title}</Legend>
            </section>
            <Bottom>
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
                </Fields>
            </Bottom>
        </Container>
    );
}

const Bottom = styled.section`
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 100vw;
    min-height: calc(100vh - 60px);
    background: ${colorDictionary.lightGray};
`;

const TrailSummary = styled.div`
    width: 205px;
    height: 100%;
    color: ${colorDictionary.gray};
    font-family: "Inter";
    font-style: normal;
    margin-top: 30px;
    @media (max-width: 995px) {
        display: none;
    }
`;

const Title = styled.h2`
    border-bottom: 1px solid rgba(33, 36, 44, 0.16);
    padding-bottom: 15px;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`;

const Fields = styled.div`
    width: 670px;
    height: 100%;
    padding-bottom: 100px;
    margin-left: 80px;
    @media (max-width: 995px) {
        width: 100%;
        margin-left: 0;
    }
`;
