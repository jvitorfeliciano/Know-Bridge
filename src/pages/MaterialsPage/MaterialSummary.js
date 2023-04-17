import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ArticleBagde from "../../components/ArticleBadge";
import { QuestionBadge } from "../../components/QuestionBadge";
import VideoBagde from "../../components/VideoBadge";
import colorDictionary from "../../constants/colors";

export default function MaterialsSummary({ subfield, displayedMaterial }) {
    const navigate = useNavigate();

    const navigateToMaterialsPage = (subfieldId, type, adress) => {
        navigate(`/materials/${subfieldId}/type/${type}/adress/${adress}`);
    };

    return (
        <Container>
            {subfield.videos.map((video) => (
                <div key={video.id}>
                    <VideoBagde
                        data={video}
                        key={video.id}
                        displayedMaterial={displayedMaterial}
                        onClick={() => navigateToMaterialsPage(subfield.id, video.type, video.id)}
                    />
                    {video.articles.map((article) => (
                        <ArticleBagde
                            data={article}
                            key={article.id}
                            displayedMaterial={displayedMaterial}
                            onClick={() => navigateToMaterialsPage(subfield.id, article.type, article.id)}
                        />
                    ))}
                    {video.questions.map((question) => (
                        <QuestionBadge
                            data={question}
                            key={question.id}
                            displayedMaterial={displayedMaterial}
                            onClick={() => navigateToMaterialsPage(subfield.id, question.type, question.id)}
                        />
                    ))}
                </div>
            ))}
        </Container>
    );
}

const Container = styled.section`
    width: 380px;
    height: 380px;
    overflow-y: auto;
    background-color: ${colorDictionary.white};
    border-radius: 0px 0px 12px 12px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    margin: 16px;
    padding: 17px;
    @media (max-width: 900px){
        display: none;
    }
`;
