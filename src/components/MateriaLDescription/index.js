import styled from "styled-components";

import { BsPlayBtn, BsPuzzle, BsBook } from "react-icons/bs";
import colorDictionary from "../../constants/colors";

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
    height: 70px;
    display: flex;
    align-items: center;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: ${colorDictionary.gray};
    padding: 16px 0px 16px 16px;
    :hover {
        background-color: ${colorDictionary.brightGray};
        border-left: 2px solid ${colorDictionary.gray};
    }
    h3 {
        margin: 0 16px;
    }
    svg {
        font-size: 24px;
    }
    cursor: pointer;
`;
