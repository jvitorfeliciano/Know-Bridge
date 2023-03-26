import styled from "styled-components";
import AuthContainer from "../../components/AuthContainer";
import colorDictionary from "../../constants/colors";
import TextField from "@mui/material/TextField";
import InputWrapper from "../../components/InputWrapper";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useSignIn from "../../hooks/api/useSignIn";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function SignIn() {
    const [data, setData] = useState({ email: "", password: "" });
    const [storedValue, setValue] = useLocalStorage("userData");
    const { signInLoading, signIn } = useSignIn();
    const navigate = useNavigate();
    console.log('teste')
    const handleFormChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await signIn(data);
            setValue(response);
            navigate(`/user/${response.userName}`);
        } catch (err) {
            toast.error(err.response.data.errors, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };

    return (
        <AuthContainer>
            <Form onSubmit={handleFormSubmit}>
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
                <Button fullWidth sx={{ height: "54px" }} type="submit" disabled={signInLoading}>
                    Entrar
                </Button>
                <p>
                    Não Possui uma conta? <Link to="/sign-up">Cadastre-se</Link>
                </p>
            </Form>
            <ToastContainer autoClose={4000} />
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
