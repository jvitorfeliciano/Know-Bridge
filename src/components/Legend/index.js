import styled from "styled-components";
import colorDictionary from "../../constants/colors";

export default function Legend({ children }) {
    return (
        <Container>
            <div>
                <h1>{children}</h1>
            </div>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100px;
    background: ${colorDictionary.navyBlue};
    border-top: 1px solid ${colorDictionary.white};
    display: flex;
    justify-content: center;
    align-items: center;
    div {
        width: 960px;
        height: 100%;
        display: flex;
        align-items: center;
    }
    h1 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 900;
        font-size: 36px;
        line-height: 40px;
        color: ${colorDictionary.white};
        @media (max-width: 700px){
        font-size: 20px;
    }
    }
`;
