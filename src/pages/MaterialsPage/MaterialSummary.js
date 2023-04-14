import styled from "styled-components";
import ArticleBagde from "../../components/ArticleBadge";
import MaterialDescription from "../../components/MateriaLDescription";
import { QuestionBadge } from "../../components/QuestionBadge";
import VideoBagde from "../../components/VideoBadge";
import colorDictionary from "../../constants/colors";

export default function MaterialsSummary({ subfield, setDisplayedMaterial, displayedMaterial }) {
    return (
        <Container>
            {subfield.videos.map((video) => (
                <div key={video.id}>
                    <VideoBagde
                        data={video}
                        onClick={() => setDisplayedMaterial(video)}
                        displayedMaterial={displayedMaterial}
                        key={video.id}
                    />
                    {video.articles.map((article) => (
                        <ArticleBagde
                            data={article}
                            onClick={() => setDisplayedMaterial(article)}
                            displayedMaterial={displayedMaterial}
                            key={article.id}
                        />
                    ))}
                    {video.questions.map((question) => (
                        <QuestionBadge
                            data={question}
                            onClick={() => setDisplayedMaterial(question)}
                            displayedMaterial={displayedMaterial}
                            key={question.id}
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
`;
