import styled from "styled-components";
import colorDictionary from "../../constants/colors";
import logo from "../../assets/images/logo.png";
import Button from "../Button";
import StyledLink from "../StyledLink";
import Avatar from "@mui/material/Avatar";
import { useContext, useState } from "react";
import UserContext from "../../contexts/userContext";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import * as authApi from "../../services/authApi";
import useToken from "../../hooks/useToken";

export default function Header() {
    const { userData } = useContext(UserContext);
    const navigate = useNavigate();
    const [showMenuBox, setShowMenuBox] = useState(false);
    const [loading, setLoading] = useState(false);
    const token = useToken();

    const signOut = async () => {
        setLoading(true);
        try {
            await authApi.signOut(token);
            setLoading(false);
            setShowMenuBox(false);
            localStorage.removeItem("userData");
            window.location.reload();
        } catch (err) {
            setLoading(false);
            setShowMenuBox(false);
            console.log(err);
        }
    };

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
                {userData && (
                    <>
                        <Avatar
                            sx={{ bgcolor: "purple", cursor: "pointer" }}
                            onClick={() => setShowMenuBox((prev) => !prev)}
                        >
                            {userData.userName[0]}
                        </Avatar>
                        {showMenuBox && (
                            <MenuBox>
                                <StyledLink
                                    to={`/user/${userData.userName}/courses`}
                                    onClick={() => setShowMenuBox(false)}
                                >
                                    <Button>Página do Aluno</Button>
                                </StyledLink>
                                <Button disabled={loading} onClick={signOut}>
                                    Sair
                                </Button>
                            </MenuBox>
                        )}
                    </>
                )}
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
                                    <StyledLink
                                        to="/sign-in"
                                        onClick={() => {
                                            setShowMenuBox(false);
                                        }}
                                    >
                                        <Button>Entrar</Button>
                                    </StyledLink>
                                    <StyledLink
                                        to="sign-up"
                                        onClick={() => {
                                            navigate("/sign-up");
                                            setShowMenuBox(false);
                                        }}
                                    >
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
    width: 100%;
    height: 60px;
    padding: 20px 5%;
    background-color: ${colorDictionary.navyBlue};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
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
    border: 2px solid ${colorDictionary.white};
    background: ${colorDictionary.navyBlue};
    position: absolute;
    right: 28px;
    bottom: -110px;
    z-index: 1;
    button {
        width: 100% !important;
        margin: 0 0 5px;
    }
`;
