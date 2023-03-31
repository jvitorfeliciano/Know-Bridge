import styled from "styled-components";

import { BsPlayBtn, BsPuzzle, BsBook } from "react-icons/bs";

export default function MaterialDescription({ data }) {
    return (
        <Container>
            {data.type === "VIDEO" && <BsPlayBtn />}
            {data.type === "QUESTION" && <BsPuzzle />}
            {data.type === "ARTICLE" && <BsBook />}
            <h3>{data.title}</h3>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;

    h3 {
        margin-left: 8px;
    }
    svg {
        font-size: 24px;
        cursor: pointer;
    }
`;
