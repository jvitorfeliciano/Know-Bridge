import styled from "styled-components";
import ProgressBar from "../ProgressBar";

export default function FieldProgress({ data }) {
    return (
        <Field>
            <h3>{data.title}</h3>
            <ProgressBar progress={data.progressPercentage} />
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
