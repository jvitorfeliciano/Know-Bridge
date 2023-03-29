import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import colorDictionary from "../../constants/colors";
import useCreateEnrollmentOnTrail from "../../hooks/api/useCreateEnrollmentOntrail";
import useDeleteEnrollmentOnTrail from "../../hooks/api/useDeleteEnrollmentOntrail";
import useToken from "../../hooks/useToken";

export default function TrailBox({ trail }) {
    const token = useToken();
    const navigate = useNavigate();
    const { createEnrollmentLoading, createEnrollmentOnTrail } = useCreateEnrollmentOnTrail();
    const { deleteEnrollmentLoading, deleteEnrollmentOnTrail } = useDeleteEnrollmentOnTrail();

    const middle = Math.floor(trail.fields.length / 2);
    const dataPartOne = trail.fields.slice(0, middle);
    const dataPartTwo = trail.fields.slice(middle);

    async function handleUserEnrollmentOnTrail(trailId) {
        if (!token) {
            navigate("/sign-in");
            return;
        }

        try {
            if (trail.isEnrolled) {
                await deleteEnrollmentOnTrail(token, trailId);
            } else {
                await createEnrollmentOnTrail(token, trailId);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Container>
            <Top>
                <TopLeft>
                    <Avatar alt={trail.title} src={trail.image} />
                    <h2>{trail.title}</h2>
                </TopLeft>
                <Button
                    onClick={() => handleUserEnrollmentOnTrail(trail.id)}
                    disabled={createEnrollmentLoading || deleteEnrollmentLoading}
                >
                    {trail?.isEnrolled ? "Desmatricular" : "Matricular"}
                </Button>
            </Top>
            <Bottom>
                <div>
                    {dataPartOne.map((field) => (
                        <h3 key={field.id}>{field.title}</h3>
                    ))}
                </div>
                <div>
                    {dataPartTwo.map((field) => (
                        <h3 key={field.id}>{field.title}</h3>
                    ))}
                </div>
            </Bottom>
        </Container>
    );
}

const Container = styled.section`
    width: 580px;
    height: auto;
    padding: 30px 100px;
    margin-top: 16px;
    border: 1px solid rgba(33, 36, 44, 0.16);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 4px;
`;

const Top = styled.div`
    width: 100%;
    border-bottom: 1px solid rgba(33, 36, 44, 0.08);
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TopLeft = styled.div`
    display: flex;
    align-items: center;

    h2 {
        margin-left: 8px;
    }
`;

const Bottom = styled.div`
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    div {
        margin-right: 10px;
        word-wrap: break-word;
        width: 50%;
    }
    div > *:not(:first-child) {
        margin-top: 30px;
    }
    h3 {
        text-align: center;
        font-family: "Inter", sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: ${colorDictionary.gray};
    }
`;
