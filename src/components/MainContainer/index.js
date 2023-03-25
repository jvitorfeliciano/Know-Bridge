import styled from "styled-components";

export default function MainContainer({ children }) {
    return <Container>{children}</Container>;
}

const Container = styled.main`
    width: 100vw;
    height: calc(100vh - 60px);
    display:flex;
`;
