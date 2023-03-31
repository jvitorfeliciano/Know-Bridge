import styled from "styled-components";
import ProgressBar from "./ProgressBar";

export default function FieldProgress({ field }) {
    return (
        <Field>
            <h3>{field.title}</h3>
            <ProgressBar progress={field.progressPercentage} />
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
