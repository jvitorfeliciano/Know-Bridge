import { Avatar } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import colorDictionary from "../../constants/colors";
import useCreateEnrollmentOnTrail from "../../hooks/api/useCreateEnrollmentOntrail";
import useDeleteEnrollmentOnTrail from "../../hooks/api/useDeleteEnrollmentOntrail";
import useToken from "../../hooks/useToken";

export default function TrailBox({ trail }) {
    console.log(trail);
    const token = useToken();
    const navigate = useNavigate();
    const { createEnrollmentLoading, createEnrollmentOnTrail } = useCreateEnrollmentOnTrail();
    const { deleteEnrollmentLoading, deleteEnrollmentOnTrail } = useDeleteEnrollmentOnTrail();
    const [isEnrolled, setIsEnrolled] = useState(trail?.isEnrolled);

    const middle = Math.ceil(trail.fields.length / 2);
    const dataPartOne = trail.fields.slice(0, middle);
    const dataPartTwo = trail.fields.slice(middle);

    async function handleUserEnrollmentOnTrail(trailId) {
        if (!token) {
            navigate("/sign-in");
            return;
        }

        try {
            if (isEnrolled) {
                const data = await deleteEnrollmentOnTrail(token, trailId);
                setIsEnrolled(data.isEnrolled);
            } else {
                const data = await createEnrollmentOnTrail(token, trailId);
                setIsEnrolled(data.isEnrolled);
            }
        } catch (err) {
            console.log(err);
        }
    }

    function navigateToTrailPage(trailId) {
        navigate(`/trails/${trailId}`);
    }

    function navigateToFieldPage(fieldId) {
        navigate(`/field/${fieldId}`);
    }

    return (
        <Container>
            <Top>
                <TopLeft onClick={() => navigateToTrailPage(trail.id)}>
                    <Avatar alt={trail.title} src={trail.image} />
                    <h2>{trail.title}</h2>
                </TopLeft>
                <Button
                    onClick={() => handleUserEnrollmentOnTrail(trail.id)}
                    disabled={createEnrollmentLoading || deleteEnrollmentLoading}
                >
                    {isEnrolled ? "Desmatricular" : "Matricular"}
                </Button>
            </Top>
            <Bottom>
                <div>
                    {dataPartOne.map((field) => (
                        <h3 key={field.id} onClick={() => navigateToFieldPage(field.id)}>
                            {field.title}
                        </h3>
                    ))}
                </div>
                <div>
                    {dataPartTwo.map((field) => (
                        <h3 key={field.id} onClick={() => navigateToFieldPage(field.id)}>
                            {field.title}
                        </h3>
                    ))}
                </div>
            </Bottom>
        </Container>
    );
}

const Container = styled.section`
    width: 580px;
    height: auto;
    padding: 30px;
    margin-top: 16px;
    background-color: ${colorDictionary.white};
    border: 1px solid rgba(33, 36, 44, 0.16);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 4px;
    @media (max-width: 600px){
        width: 100%;
    }
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
    cursor: pointer;
    h2 {
        font-family: "Inter", sans-serif;
        margin-left: 8px;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        color: ${colorDictionary.gray};
        :hover {
            text-decoration: underline;
        }
    }
`;

const Bottom = styled.div`
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    div {
        width: 50%;
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
        margin-bottom: 5px;
        cursor: pointer;
        :hover {
            text-decoration: underline;
        }
    }
`;
