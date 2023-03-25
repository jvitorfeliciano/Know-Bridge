import styled from "styled-components";
import AuthContainer from "../../components/AuthContainer";
import colorDictionary from "../../constants/colors";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputWrapper from "../../components/InputWrapper";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <AuthContainer>
            <Form>
                <h1>Crie uma nova conta</h1>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <InputWrapper style={{ marginRight: "10px" }}>
                        <TextField fullWidth label="Primeiro Nome" type="text" required />
                    </InputWrapper>
                    <InputWrapper>
                        <TextField fullWidth label="Sobrenome" type="text" required />
                    </InputWrapper>
                </Box>
                <InputWrapper>
                    <TextField fullWidth label="Nome do usuário" type="text" required />
                </InputWrapper>
                <InputWrapper>
                    <TextField fullWidth label="E-mail" type="email" required />
                </InputWrapper>
                <InputWrapper></InputWrapper>
                <InputWrapper>
                    <TextField fullWidth label="Password" type="password" required />
                </InputWrapper>
                <Button fullWidth sx={{ height: "54px" }} type="submit">
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
