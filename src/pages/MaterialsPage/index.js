import { useParams } from "react-router-dom";
import styled from "styled-components";
import SkeletonLoading from "../../components/SkeletionLoading/SkeletonLoading";
import colorDictionary from "../../constants/colors";
import useReadSubfieldById from "../../hooks/api/useReadSubfieldById";
import MaterialDescription from "../../components/MateriaLDescription";
import { useState } from "react";
import Video from "./Video";

export default function MaterialsPage() {
    const { subfieldId } = useParams();
    const { subfieldLoading, subfield } = useReadSubfieldById(subfieldId);
    const [displayedMaterial, setDisplayedMaterial] = useState(null);

    if (subfieldLoading) {
        return <SkeletonLoading />;
    }

    return (
        <Container>
            <MaterialsSummary>
                {subfield.videos.map((video) => (
                    <div key={video.id}>
                        <MaterialDescription
                            data={video}
                            onClick={() => setDisplayedMaterial(video)}
                            displayedMaterial={displayedMaterial}
                        />
                        {video.articles.map((article) => (
                            <MaterialDescription
                                data={article}
                                onClick={() => setDisplayedMaterial(article)}
                                displayedMaterial={displayedMaterial}
                                key={article.id}
                            />
                        ))}
                        {video.questions.map((question) => (
                            <MaterialDescription
                                data={question}
                                onClick={() => setDisplayedMaterial(question)}
                                displayedMaterial={displayedMaterial}
                                key={question.id}
                            />
                        ))}
                    </div>
                ))}
            </MaterialsSummary>
            <DisplayedMaterial>
                <Title>Contando com números pequenos</Title>
                <Video />
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

const MaterialsSummary = styled.section`
    width: 380px;
    height: 380px;
    overflow-y: auto;
    background-color: ${colorDictionary.white};
    border-radius: 0px 0px 12px 12px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    margin: 16px;
    padding: 17px;
`;

const DisplayedMaterial = styled.section`
    width: 80%;
    height: 100%;
    background-color: ${colorDictionary.white};
    overflow-y: auto;
    display: flex;
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
    margin-top: 24px;
    margin-bottom: 54px;
`;
