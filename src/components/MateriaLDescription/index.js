import styled from "styled-components";

import { BsPlayBtn } from "react-icons/bs";

export default function MaterialDescription({ data }) {
    return (
        <Container>
            <BsPlayBtn />
            <h3>Como calcular a hipotenusa</h3>
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
