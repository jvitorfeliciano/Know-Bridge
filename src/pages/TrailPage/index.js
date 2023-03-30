import styled from "styled-components";
import colorDictionary from "../../constants/colors";
import FieldProgress from "./FieldProgress";
import Unity from "./Unity";

export default function TrailPage() {
    return (
        <Container>
            <TrailSummary>
                <Title>Resumo do curso</Title>
                <FieldProgress />
                <FieldProgress />
                <FieldProgress />
                <FieldProgress />
            </TrailSummary>
            <Unities>
                <Unity />
                <Unity />
                <Unity />
                <Unity />
                <Unity />
                <Unity />
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
