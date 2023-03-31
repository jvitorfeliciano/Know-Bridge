import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import { styled as styledMui } from "@mui/material/styles";

export default function ProgressBar({ progress }) {
    const BorderLinearProgress = styledMui(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: "#e6e7ea",
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: "#00adbc",
        },
    }));

    return <BorderLinearProgress variant="determinate" value={progress ? progress : 0} />;
}
