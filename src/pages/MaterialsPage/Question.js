import styled from "styled-components";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Divider from "@mui/material/Divider";
import { useState, useEffect } from "react";
import Button from "../../components/Button";
import usePostQuestionAnswer from "../../hooks/api/usePostQuestionAnswer";
import useToken from "../../hooks/useToken";
import DoneAllIcon from "@mui/icons-material/DoneAll";

export default function Question({ data, setUpdate }) {
    const { questionAnswerLoading, postQuestionAnswer } = usePostQuestionAnswer();
    const [isDone, setIsDone] = useState(data.isDone);
    const [answer, setAnswer] = useState("");
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState();
    const token = useToken();
    const handleRadioChange = (event) => setAnswer(event.target.value);

    useEffect(() => {
        setAnswer(undefined);
        setHelperText(undefined);
        setError(false);
    }, [data]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!answer) {
            setHelperText("Escolha uma opção");
            setError(true);
            return;
        }
        try {
            const data = await postQuestionAnswer(token, answer);
            setHelperText(data.message);
            setError(false);
            setUpdate((prev) => setUpdate(!prev));
            setIsDone(true);
        } catch (err) {
            setHelperText(err.response.data.errors);
            setError(true);
        }
    };

    return (
        <Container>
            <p>{data.statement}</p>

            <form onSubmit={handleSubmit}>
                <FormControl error={error} variant="standard" sx={{ width: "100%" }}>
                    <FormLabel id="demo-error-radios" sx={{ marginBottom: "10px" }}>
                        Escolha uma resposta:
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-error-radios"
                        name="quiz"
                        defaultValue={answer}
                        onChange={handleRadioChange}
                    >
                        {data.answers.map((answer) => (
                            <div key={answer.id}>
                                <Divider />
                                <FormControlLabel value={answer.id} control={<Radio />} label={answer.answer} />
                                <Divider />
                            </div>
                        ))}
                    </RadioGroup>
                    <FormHelperText>{helperText}</FormHelperText>
                    {isDone ? (
                        <DoneAllIcon sx={{ position: "absolute", right: 0, bottom: "-20px" }} color="primary" />
                    ) : (
                        <Button type="submit" disabled={questionAnswerLoading}>
                            Chechar Resposta
                        </Button>
                    )}
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
