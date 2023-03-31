import { Skeleton, Stack } from "@mui/material";

export default function SkeletonLoading() {
    return (
        <Stack
            spacing={1}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "20px",
            }}
        >
            {" "}
            <Skeleton variant="rectangular" width={400} height={150} animation="wave" />
            <Skeleton variant="rectangular" width={400} height={150} animation="wave" />
            <Skeleton variant="rectangular" width={400} height={150} animation="wave" />
            <Skeleton variant="rectangular" width={400} height={150} animation="wave" />
        </Stack>
    );
}
