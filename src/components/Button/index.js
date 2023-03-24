import { Button as MuiButton } from "@mui/material";
import styled from "styled-components";
import colorDictionary from "../../constants/colors";

export default function Button({ variant = "outlined", children, ...props }) {
    return (
        <StyledButton variant={variant} {...props}>
            {children}
        </StyledButton>
    );
}

const StyledButton = styled(MuiButton)`
    border-radius: 30px !important;
    border: 2px solid ${colorDictionary.white} !important;
    color: ${colorDictionary.white} !important;
    background-color: ${colorDictionary.navyBlue} !important;
    font-family: "Inter", sans-serif !important;
    font-weight: 400 !important;
    font-size: 16px !important;
    line-height: 22px !important;
    text-transform: none !important;
`;
