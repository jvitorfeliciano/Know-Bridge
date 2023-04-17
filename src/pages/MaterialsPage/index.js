import { useParams } from "react-router-dom";
import styled from "styled-components";
import SkeletonLoading from "../../components/SkeletionLoading/SkeletonLoading";
import colorDictionary from "../../constants/colors";
import { useState, useEffect } from "react";
import Video from "./Video";
import MaterialsSummary from "./MaterialSummary";
import Question from "./Question";
import useToken from "../../hooks/useToken";
import * as subfieldsApi from "../../services/subfieldsApi";

export default function MaterialsPage() {
    const { subfieldId, type, adressId } = useParams();
    const [loading, setLoading] = useState(true);
    const [update, setUpdate] = useState(false);
    const [data, setData] = useState(null);
    const [displayedMaterial, setDisplayedMaterial] = useState(null);
    const token = useToken();

    useEffect(() => {
        const getMaterials = async () => {
            try {
                const response = await subfieldsApi.getSubfieldById(token, subfieldId);
                setData(response);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
            }
        };
        getMaterials();
    }, [update, subfieldId, token]);

    useEffect(() => {
        if (data) {
            if (type === "VIDEO") {
                data.videos.forEach((video) => {
                    if (Number(adressId) === video.id) {
                        setDisplayedMaterial(video);
                    }
                });
            } else if (type === "QUESTION") {
                data.videos.forEach((video) =>
                    video.questions.forEach((question) => {
                        if (Number(adressId) === question.id) {
                            setDisplayedMaterial(question);
                        }
                    })
                );
            }
        }
    }, [data, type, adressId]);

    if (loading) {
        return <SkeletonLoading />;
    }

    return (
        <Container>
            <MaterialsSummary subfield={data} displayedMaterial={displayedMaterial} />
            <DisplayedMaterial>
                <Title>{displayedMaterial?.title}</Title>
                {displayedMaterial?.type === "VIDEO" && <Video data={displayedMaterial} />}
                {displayedMaterial?.type === "QUESTION" && <Question data={displayedMaterial} setUpdate={setUpdate} />}
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
    @media (max-width: 900px) {
        width: 100%;
        padding: 24px 0;
    }
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
