import styled from "styled-components";

export default function Video({ data }) {
    console.log(data);
    return (
        <Iframe
            title="test"
            src={`https://www.youtube.com/embed/${data.videoAdress}`}
            allow="autoplay; encrypted-media"
            allowFullScreen
        ></Iframe>
    );
}
const Iframe = styled.iframe`
    width: 95%;
    height: 75%;
    @media (max-width: 900px) {
        width: 100%;
    }
`;
