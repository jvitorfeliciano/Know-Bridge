import styled from "styled-components";
import colorDictionary from "../../constants/colors";
import logo from "../../assets/images/logo.png";
import Button from "../Button";
import StyledLink from "../StyledLink";

export default function Header() {
    return (
        <Container>
            <Left>
                <img src={logo} alt="logo" />
            </Left>
            <Middle>
                <Legend>Home</Legend>
                <Legend>Sobre Nós</Legend>
                <Legend>Trilhas</Legend>
                <Legend>Disciplinas</Legend>
            </Middle>
            <Right>
                <StyledLink to="/sign-in">
                    <Button>Entrar</Button>
                </StyledLink>
                <StyledLink to="/sign-up">
                    <Button>Cadastrar-se</Button>
                </StyledLink>
            </Right>
        </Container>
    );
}

const Container = styled.header`
    width: 100vw;
    height: 60px;
    padding: 10px;
    background-color: ${colorDictionary.navyBlue};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    width: 40px;
    height: 40px;
    img {
        width: 100%;
        height: auto;
    }
`;

const Right = styled.div`
    button {
        margin-left: 10px;
        border: 2px solid ${colorDictionary.white};
    }
`;

const Middle = styled.div`
    width: 500px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Legend = styled.div`
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: ${colorDictionary.white};
    cursor: pointer;
    :hover {
        border-bottom: 3px solid ${colorDictionary.white};
    }
`;
