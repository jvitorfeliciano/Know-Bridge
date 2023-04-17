import { Avatar } from "@mui/material";
import { Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import colorDictionary from "../../constants/colors";
import useToken from "../../hooks/useToken";

export default function UserPage() {
    const { userName } = useParams();

    return (
        <Container>
            <UserInformations>
                <Avatar sx={{ bgcolor: "purple" }}>{userName[0]}</Avatar>
                <h2>{userName}</h2>
            </UserInformations>
            <Dashboard>
                <Content>
                    <Outlet />
                </Content>
            </Dashboard>
        </Container>
    );
}

const Container = styled.main`
    width: 100%;
    min-height: calc(100vh - 60px);
    background: ${colorDictionary.lightGray};
`;

const UserInformations = styled.section`
    width: 100%;
    height: 135px;
    border-top: 1px solid #f7f5f4;
    background: #f7f5f4;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
        margin-left: 12px;
        font-family: "Inter", sans-serif;
        font-weight: 700;
        font-size: 22px;
        line-height: 22px;
        color: ${colorDictionary.black};
    }
`;

const Dashboard = styled.section`
    margin-top: 30px;
    display: flex;
    justify-content: center;
`;

const Content = styled.div`
    width: 80%;
    height: auto;
`;
