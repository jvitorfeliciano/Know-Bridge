import styled from "styled-components";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import Button from "../../components/Button";

export default function Question() {
    const [answer, setAnswer] = useState();
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState();

    const handleRadioChange = (event) => setAnswer(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (answer === "best") {
            setHelperText("Você acertou!");
            setError(false);
        } else if (answer === "worst") {
            setHelperText("Resposta Incorreta!");
            setError(true);
        } else {
            setHelperText("Escolha uma opção");
            setError(true);
        }
    };

    return (
        <Container>
            <p>AAAA viagem é importante</p>

            <form onSubmit={handleSubmit}>
                <FormControl error={error} variant="standard" sx={{ width: "100%" }} onSubmit={handleSubmit}>
                    <FormLabel id="demo-error-radios" sx={{ marginBottom: "10px" }}>
                        Escolha uma resposta:
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-error-radios"
                        name="quiz"
                        onChange={handleRadioChange}
                        value={answer}
                    >
                        <Divider />
                        <FormControlLabel value="best" control={<Radio />} label="The best!" />
                        <Divider />
                        <FormControlLabel value="worst" control={<Radio />} label="The worst." />
                        <Divider />
                        <FormControlLabel value="worst" control={<Radio />} label="The worst." />
                        <Divider />
                        <FormControlLabel value="worst" control={<Radio />} label="The worst." />
                        <Divider />
                    </RadioGroup>
                    <FormHelperText>{helperText}</FormHelperText>
                    <Button type="submit">Chechar Resposta</Button>
                </FormControl>
            </form>
        </Container>
    );
}

const Container = styled.div`
    width: 670px;
    height: 75%;
    border-top: 1px solid black;
    padding: 0 50px;
    position: relative;
    p {
        font-family: "Inter";
        margin-top: 27px;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        color: #444444;
    }

    form {
        margin-top: 25px;
        width: 100%;
        height: auto;
    }

    button {
        margin-top: 15px;
        width: 250px;
        position: absolute;
        right: 0;
        bottom: -55px;
    }
`;
