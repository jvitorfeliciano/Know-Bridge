import styled from "styled-components";
import colorDictionary from "../../constants/colors";
import logo from "../../assets/images/logo.png";
import Button from "../Button";
import StyledLink from "../StyledLink";
import Avatar from "@mui/material/Avatar";
import { useContext, useState } from "react";
import UserContext from "../../contexts/userContext";
import { FiMenu } from "react-icons/fi";

export default function Header() {
    const { userData } = useContext(UserContext);
    const [showMenuBox, setShowMenuBox] = useState(false);

    return (
        <Container>
            <div>
                <StyledLink to="/trails">
                    <Legend>Trilhas</Legend>
                </StyledLink>
            </div>
            <Middle>
                <img src={logo} alt="logo" />

                <h1>KnowBridge</h1>
            </Middle>
            <Right>
                {userData && <Avatar sx={{ bgcolor: "purple" }}>{userData.userName[0]}</Avatar>}
                {!userData && (
                    <>
                        <Buttons>
                            <StyledLink to="/sign-in">
                                <Button>Entrar</Button>
                            </StyledLink>
                            <StyledLink to="/sign-up">
                                <Button>Cadastrar-se</Button>
                            </StyledLink>
                        </Buttons>
                        <Menu>
                            <FiMenu onClick={() => setShowMenuBox((prev) => !prev)} />
                            {showMenuBox && (
                                <MenuBox>
                                    <StyledLink to="/sign-in">
                                        <Button>Entrar</Button>
                                    </StyledLink>
                                    <StyledLink to="/sign-up">
                                        <Button>Cadastrar-se</Button>
                                    </StyledLink>
                                </MenuBox>
                            )}
                        </Menu>
                    </>
                )}
            </Right>
        </Container>
    );
}

const Container = styled.header`
    width: 100vw;
    height: 60px;
    padding: 20px 5%;
    background-color: ${colorDictionary.navyBlue};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Right = styled.div`
    button {
        margin-left: 10px;
        border: 2px solid ${colorDictionary.white};
    }
`;

const Middle = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 100%;
        height: auto;
    }
    h1 {
        font-family: "Inter", sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 22px;
        color: ${colorDictionary.white};
        margin-left: 8px;
    }
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

const Buttons = styled.div`
    @media (max-width: 800px) {
        display: none;
    }
`;

const Menu = styled.div`
    display: none;
    position: relative;
    svg {
        font-size: 30px;
        color: ${colorDictionary.white};
        cursor: pointer;
    }
    @media (max-width: 800px) {
        display: block;
    }
`;

const MenuBox = styled.div`
    width: 200px;
    height: auto;
    padding: 10px;
    border-top: 2px solid ${colorDictionary.white};
    background: ${colorDictionary.navyBlue};
    position: absolute;
    right: 3px;
    bottom: -120px;
    button {
        width: 100% !important;
        margin: 0 0 5px;
    }
`;
