import { useParams } from "react-router-dom";
import styled from "styled-components";
import SkeletonLoading from "../../components/SkeletionLoading/SkeletonLoading";
import colorDictionary from "../../constants/colors";
import useReadSubfieldById from "../../hooks/api/useReadSubfieldById";
import { useState } from "react";
import Video from "./Video";
import MaterialsSummary from "./MaterialSummary";
import Question from "./Question";

export default function MaterialsPage() {
    const { subfieldId } = useParams();
    const { subfieldLoading, subfield } = useReadSubfieldById(subfieldId);
    const [displayedMaterial, setDisplayedMaterial] = useState(null);

    if (subfieldLoading) {
        return <SkeletonLoading />;
    }

    console.log(displayedMaterial);
    return (
        <Container>
            <MaterialsSummary
                subfield={subfield}
                setDisplayedMaterial={setDisplayedMaterial}
                displayedMaterial={displayedMaterial}
            />
            <DisplayedMaterial>
                <Title>Contando com números pequenos</Title>
                {/* <Video data={displayedMaterial} /> */}
                <Question />
            </DisplayedMaterial>
        </Container>
    );
}

const Container = styled.main`
    width: 100vw;
    height: calc(100vh - 60px);
    background: ${colorDictionary.lightGray};
    display: flex;
    justify-content: space-between;
`;

const DisplayedMaterial = styled.section`
    width: 80%;
    height: 100%;
    background-color: ${colorDictionary.white};
    overflow-y: auto;
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: center;
    border-left: 1px solid rgba(33, 36, 44, 0.16);
`;

const Title = styled.h1`
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    color: #21242c;
    margin-bottom: 54px;
`;
