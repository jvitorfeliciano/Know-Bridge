import styled from "styled-components";
import colorDictionary from "../../constants/colors";
import MaterialDescription from "../../components/MateriaLDescription";
import { useNavigate } from "react-router-dom";

export default function Subfield({ subfield }) {
    const navigate = useNavigate();

    return (
        <Container>
            <Title onClick={() => navigate(`/materials/${subfield.id}`)}>{subfield.title}</Title>
            {subfield.videos.map((video) => (
                <div key={video.id}>
                    <MaterialDescription data={video} />
                    {video.questions.map((question) => (
                        <MaterialDescription data={question} key={question.id} />
                    ))}
                    {video.articles.map((article) => (
                        <MaterialDescription data={article} key={article.id} />
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
