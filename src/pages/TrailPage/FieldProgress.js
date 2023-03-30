import styled from "styled-components";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import { styled as styledMui } from "@mui/material/styles";

export default function FieldProgress() {
    const BorderLinearProgress = styledMui(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: "#e6e7ea",
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: "#00adbc",
        },
    }));

    return (
        <Field>
            <h3>Contando</h3>
            <BorderLinearProgress variant="determinate" value={50} />
        </Field>
    );
}

const Field = styled.div`
    width: 100%;
    height: auto;
    margin-top: 25px;
    h3 {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        margin-bottom: 10px;
    }
`;
