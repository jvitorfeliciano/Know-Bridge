import styled from "@emotion/styled";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import colorDictionary from "../../constants/colors";

export default function Course({ course }) {
    const navigate = useNavigate();

    return (
        <Container onClick={() => navigate(`/trails/${course.id}`)}>
            <Top>
                <Avatar sx={{ width: "80px", height: "80px" }} src={course.image} alt={course.title} />
            </Top>
            <Bottom>
                <h4>Tutorial</h4>
                <h3>{course.title}</h3>
            </Bottom>
        </Container>
    );
}

const Container = styled.div`
    width: 240px;
    height: 300px;
    background: ${colorDictionary.white};
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    :hover {
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }
    cursor: pointer;
`;

const Top = styled.div`
    height: 50%;
    border-bottom: 1px solid ${colorDictionary.gray};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Bottom = styled.div`
    padding: 30px 15px;
    font-family: "Inter", sans-serif;
    line-height: 22px;
    color: ${colorDictionary.black};
    word-break: break-word;
    h4 {
        color: ${colorDictionary.gray};
        font-weight: 400;
        font-size: 16px;
    }
    h3 {
        font-weight: 700;
        font-size: 18px;
    }
`;
