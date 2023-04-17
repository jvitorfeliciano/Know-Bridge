import styled from "styled-components";
import colorDictionary from "../../constants/colors";
import MaterialDescription from "../../components/MateriaLDescription";
import { useNavigate } from "react-router-dom";
import { QuestionBadge } from "../../components/QuestionBadge";
import VideoBagde from "../../components/VideoBadge";
import ArticleBagde from "../../components/ArticleBadge";

export default function Subfield({ subfield }) {
    const navigate = useNavigate();
 
    const navigateToMaterialsPage = (subfieldId, type, adress) => {
        navigate(`/materials/${subfieldId}/type/${type}/adress/${adress}`);
    };

    return (
        <Container>
            <Title onClick={() => navigateToMaterialsPage(subfield.id, subfield.videos[0].type, subfield.videos[0].id)}>
                {subfield.title}
            </Title>
            {subfield.videos.map((video) => (
                <div key={video.id}>
                    {
                        <VideoBagde
                            data={video}
                            onClick={() => navigateToMaterialsPage(subfield.id, video.type, video.id)}
                        />
                    }

                    {video.articles.map((article) => (
                        <ArticleBagde
                            data={article}
                            key={article.id}
                            onClick={() => navigateToMaterialsPage(subfield.id, article.type, article.id)}
                        />
                    ))}
                    {video.questions.map((question) => (
                        <QuestionBadge
                            data={question}
                            key={question.id}
                            onClick={() => navigateToMaterialsPage(subfield.id, question.type, question.id)}
                        />
                    ))}
                </div>
            ))}
        </Container>
    );
}

const Container = styled.section`
    width: 100%;
    height: auto;
    padding: 18px;
    margin-top: 16px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    background-color: ${colorDictionary.white};
    color: ${colorDictionary.gray};
    border: 1px solid rgba(33, 36, 44, 0.16);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 4px;
`;

const Title = styled.div`
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 25px;
    cursor: pointer;
`;
