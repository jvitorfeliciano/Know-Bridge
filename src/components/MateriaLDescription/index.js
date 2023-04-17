import styled from "styled-components";
import colorDictionary from "../../constants/colors";

export default function MaterialDescription({ children, ...props }) {
    return <Container {...props}>{children}</Container>;
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
    color: ${colorDictionary.black};
    padding: 16px 0px 16px 16px;
    ${(props) =>
        props.displayedMaterial?.type === props.data.type && props.displayedMaterial?.id === props.data.id
            ? ` background: ${colorDictionary.lightBlue}; border-left: 2px solid ${colorDictionary.blue}`
            : ""};
    h3 {
        margin: 0 16px;
    }
    svg {
        font-size: 25px;
    }
    cursor: pointer;
    :hover {
        border-left: 2px solid black;
        background: ${colorDictionary.brightGray};
    }
`;
