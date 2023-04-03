import { useParams } from "react-router-dom";
import styled from "styled-components";
import SkeletonLoading from "../../components/SkeletionLoading/SkeletonLoading";
import colorDictionary from "../../constants/colors";
import useReadSubfieldById from "../../hooks/api/useReadSubfieldById";
import MaterialDescription from "../../components/MateriaLDescription";

export default function MaterialsPage() {
    const { subfieldId } = useParams();
    const { subfieldLoading, subfield } = useReadSubfieldById(subfieldId);

    console.log(subfield);

    if (subfieldLoading) {
        return <SkeletonLoading />;
    }

    return (
        <Container>
            <MaterialsSummary>
                {subfield.videos.map((video) => (
                    <div>
                        <MaterialDescription data={video} />
                        {video.articles.map((article) => (
                            <MaterialDescription data={article} />
                        ))}
                        {video.questions.map((question) => (
                            <MaterialDescription data={question} />
                        ))}
                    </div>
                ))}
            </MaterialsSummary>
            <DisplayedMaterial></DisplayedMaterial>
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
    border-radius: 0px 0px 12px 12px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    margin: 16px;
    padding: 17px;
`;
const DisplayedMaterial = styled.section`
    width: 80%;
    height: calc(100vh - 60px);
    border-left: 1px solid rgba(33, 36, 44, 0.16);
`;
