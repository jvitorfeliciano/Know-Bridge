import styled from "styled-components";
import homePageImage from "../../assets/images/home.jpg";
import Button from "../../components/Button";
import colorDictionary from "../../constants/colors";

export default function HomePage() {
    return (
        <Container>
            <Right>
                <h1>
                    {" "}
                    <span style={{ color: colorDictionary.navyBlue }}>KnowBridge</span>, ajudando estudantes a
                    alcançarem os seus sonhos!
                </h1>
                <p>
                    A cada passo, a KnowBridge se fortalece, orientando os alunos para onde eles pertencem, para um
                    mundo de infinitas possibilidades, onde os sonhos se tornam realidade. Então dê o primeiro passo e
                    junte-se à nossa comunidade!
                </p>
                <Button>Começar agora!</Button>
            </Right>
            <Left>
                <img src={homePageImage} alt="home_page" />
            </Left>
        </Container>
    );
}

const Container = styled.main`
    width: 100vw;
    height: calc(100vh - 60px);
    display: flex;
    padding-top: 80px;
`;

const Right = styled.section`
    width: 40%;
    height: 500px;
    display: flex;
    flex-direction: column;
    padding-left: 200px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    color: ${colorDictionary.black};
    h1 {
        font-size: 42px;
        line-height: 50px;
    }
    p {
        margin-top: 25px;
        font-size: 22px;
        line-height: 26px;
    }
    button {
        padding: 12px 0;
        margin-top: 30px;
        width: 200px;
    }
`;

const Left = styled.section`
    width: 60%;
    height: 500px;
    img {
        width: 100%;
        height: auto;
    }
`;
