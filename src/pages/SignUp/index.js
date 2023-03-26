import styled from "styled-components";
import AuthContainer from "../../components/AuthContainer";
import colorDictionary from "../../constants/colors";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputWrapper from "../../components/InputWrapper";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useSignUp from "../../hooks/api/useSignUp";

export default function SignUp() {
    const [data, setData] = useState({ firstName: "", lastName: "", userName: "", email: "", password: "" });
    const { signUp, signUpLoading } = useSignUp();
    const navigate = useNavigate();

    const handleFormChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            await signUp(data);
            navigate("/sign-in");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <AuthContainer>
            <Form onSubmit={handleFormSubmit}>
                <h1>Crie uma nova conta</h1>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <InputWrapper style={{ marginRight: "10px" }}>
                        <TextField
                            fullWidth
                            name="firstName"
                            label="Primeiro Nome"
                            type="text"
                            required
                            onChange={handleFormChange}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <TextField
                            fullWidth
                            name="lastName"
                            label="Sobrenome"
                            type="text"
                            required
                            onChange={handleFormChange}
                        />
                    </InputWrapper>
                </Box>
                <InputWrapper>
                    <TextField
                        fullWidth
                        name="userName"
                        label="Nome do usuário"
                        type="text"
                        required
                        onChange={handleFormChange}
                    />
                </InputWrapper>
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
                <InputWrapper></InputWrapper>
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
                <Button fullWidth sx={{ height: "54px" }} type="submit" disabled={signUpLoading}>
                    Regitrar-se
                </Button>
                <p>
                    Já Cadastrado? <Link to="sign-in">Entrar</Link>
                </p>
            </Form>
        </AuthContainer>
    );
}
const Form = styled.form`
    width: 545px;
    height: 530px;
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
