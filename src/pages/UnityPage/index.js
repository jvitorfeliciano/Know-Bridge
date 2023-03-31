import { useParams } from "react-router-dom";
import MainContainer from "../../components/MainContainer";
import Subfield from "./Subfield";
import styled from "styled-components";

export default function UnityPage() {
    const { unityId } = useParams();

    return (
        <MainContainer>
            <Subfields>
                <Subfield></Subfield>
                <Subfield></Subfield>
                <Subfield></Subfield>
                <Subfield></Subfield>
                <Subfield></Subfield>
            </Subfields>
        </MainContainer>
    );
}

const Subfields = styled.div`
    width: 670px;
    height: auto;
`;
