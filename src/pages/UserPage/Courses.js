import styled from "styled-components";
import Course from "./Course";
import UserContext from "../../contexts/userContext";
import useToken from "../../hooks/useToken";
import * as usersApi from "../../services/usersApi";
import { useContext, useState, useEffect } from "react";

export default function Courses() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const { userData } = useContext(UserContext);
    const token = useToken();

    console.log(data);
    useEffect(() => {
        const fetchUserCourses = async () => {
            try {
                const courses = await usersApi.getUserCourses(token, userData.userName);
                setData(courses.trails);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                console.log(err);
            }
        };

        fetchUserCourses();
    }, [token, userData]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Title>MEUS CURSOS</Title>
            <Container>
                {data.map((course) => (
                    <Course course={course.trail} key={course.trail.id} />
                ))}
            </Container>
        </>
    );
}

const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
`;

const Title = styled.h3`
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    margin-left: 30px;
`;
