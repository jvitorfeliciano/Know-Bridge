import styled from "styled-components";
import colorDictionary from "../../constants/colors";
import MaterialDescription from "../../components/MateriaLDescription";

export default function Subfield() {
    return (
        <Container>
            <Title>Contando</Title>
            <MaterialDescription />
        </Container>
    );
}

const Container = styled.section`
    width: 100%;
    height: auto;
    padding: 18px;
    margin-top: 16px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    color: ${colorDictionary.gray};
    border: 1px solid rgba(33, 36, 44, 0.16);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 4px;
`;

const Title = styled.div`
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 25px;
`;
