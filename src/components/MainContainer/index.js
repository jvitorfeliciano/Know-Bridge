import styled from "styled-components";
import colorDictionary from "../../constants/colors";

export default function MainContainer({ children, column }) {
    return <Container column={column}>{children}</Container>;
}

const Container = styled.main`
    width: 100vw;
    height: calc(100vh - 60px);
    background: ${colorDictionary.lightGray};
    overflow-y: auto;
    display: flex;
    justify-content: center;
`;
