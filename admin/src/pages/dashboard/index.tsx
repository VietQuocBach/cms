import { Box, LinearProgress } from "@mui/material";

function DashboardPage() {
    return <Box display={"flex"} flex={1}>
        <Box width={"20%"}>
            <LinearProgress />
        </Box>
    </Box>
}

export default DashboardPage;