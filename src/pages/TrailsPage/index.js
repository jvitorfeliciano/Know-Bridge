import styled from "styled-components";
import SkeletonLoading from "../../components/SkeletionLoading/SkeletonLoading";
import colorDictionary from "../../constants/colors";
import useReadTrails from "../../hooks/api/useReadTrails";
import TrailBox from "./TrailBox";

export default function TrailsPage() {
    const { trailsLoading, trails } = useReadTrails();
    console.log(trails);

    if (trailsLoading) {
        return <SkeletonLoading />;
    }
    return (
        <Container>
            <TrailBox />
        </Container>
    );
}

const Container = styled.main`
    width: 100vw;
    height: calc(100vh - 60px);
    background: ${colorDictionary.lightGray};
    display: flex;
    flex-direction: column;
    align-items: center;
`;
