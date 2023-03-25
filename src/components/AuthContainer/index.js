import styled from "styled-components";

export default function AuthContainer({ children }) {
    return <Container>{children}</Container>;
}

const Container = styled.main`
    width: 100vw;
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(334deg, #14fc74, #13f9c4, #00adbc);
    background-size: 180% 180%;
    animation: gradient-animation 6s ease infinite;

    @keyframes gradient-animation {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`;
