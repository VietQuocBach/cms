import { useState } from "react"
import { Box, LinearProgress, Typography } from "@mui/material"
import Topbar from "./topbar"

function AdminLayout() {
    const [loading, setLoading] = useState(true)

    if (loading) {
        return <Box display={"flex"} height={'100vh'} justifyContent={"center"} alignItems={'center'} flexDirection={"column"}>
            <Box width={500} flex={1}>
                <Typography variant={"h4"}>Loading...</Typography>
                <LinearProgress />
            </Box>

        </Box>
    }

    return <Box display={"flex"} >
        <Topbar />
        <LinearProgress />
    </Box>
}

export default AdminLayout