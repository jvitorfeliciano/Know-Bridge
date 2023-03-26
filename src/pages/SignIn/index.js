import styled from "styled-components";
import AuthContainer from "../../components/AuthContainer";
import colorDictionary from "../../constants/colors";
import TextField from "@mui/material/TextField";
import InputWrapper from "../../components/InputWrapper";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignIn() {
    const [data, setData] = useState({ email: "", password: "" });

    const handleFormChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

    return (
        <AuthContainer>
            <Form>
                <h1>Faça login para inciar a sua sessão</h1>
                <InputWrapper>
                    <TextField
                        fullWidth
                        name="email"
                        label="E-mail"
                        type="email"
                        required
                        onChange={handleFormChange}
                    />
                </InputWrapper>
                <InputWrapper>
                    <TextField
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        required
                        onChange={handleFormChange}
                    />
                </InputWrapper>
                <Button fullWidth sx={{ height: "54px" }} type="submit">
                    Entrar
                </Button>
                <p>
                    Não Possui uma conta? <Link to="sign-in">Cadastre-se</Link>
                </p>
            </Form>
        </AuthContainer>
    );
}

const Form = styled.form`
    width: 545px;
    height: 350px;
    border-radius: 15px;
    background: ${colorDictionary.white};
    padding: 0 45px;

    h1 {
        text-align: center;
        color: ${colorDictionary.black};
        font-family: "Source Sans Pro", sans-serif;
        font-weight: 900;
        font-size: 26px;
        margin: 30px 0;
    }
    button {
        font-family: "Source Sans Pro", sans-serif !important;
        font-weight: 700 !important;
        font-size: 20px !important;
    }
    p {
        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        margin-top: 20px;
    }
`;
