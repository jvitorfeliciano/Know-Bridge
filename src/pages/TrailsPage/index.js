import styled from "styled-components";
import SkeletonLoading from "../../components/SkeletionLoading/SkeletonLoading";
import colorDictionary from "../../constants/colors";
import useReadTrails from "../../hooks/api/useReadTrails";
import TrailBox from "./TrailBox";

export default function TrailsPage() {
    const { trailsLoading, trails } = useReadTrails();

    if (trailsLoading) {
        return <SkeletonLoading />;
    }
    return (
        <Container>
            {trails.map((trail) => (
                <TrailBox key={trail.id} trail={trail} />
            ))}
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
    @media (max-width: 600px){
        padding: 0 20px;
    }
`;
