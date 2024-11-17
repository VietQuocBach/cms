import { useState } from "react"
import { Box, Divider, LinearProgress, Stack, Typography } from "@mui/material"
import { Outlet, Route, Routes } from "react-router-dom"

import Topbar from "./topbar"
import Sidebar from "./sidebar"
import DashboardPage from "../../pages/dashboard"
import UsersPage from "../../pages/users"
import SettingsPage from "../../pages/settings"

function AdminLayout() {
    const [loading, setLoading] = useState(false)

    if (loading) {
        return <Box display={"flex"} height={'100vh'} justifyContent={"center"} alignItems={'center'} flexDirection={"column"}>
            <Box width={500} flex={1}>
                <Typography>Loading...</Typography>
                <LinearProgress />
            </Box>

        </Box>
    }

    return <Box display={"flex"} minHeight={'100%'} flex={"1 1 auto"} flexDirection={"column"} >
        <Stack direction={"column"} height={"100%"}>
            <Topbar />
            <Divider />
            <Box display={"flex"} flex={1}>
                <Sidebar />
                <Divider orientation="vertical" />
                <Outlet />

            </Box>
        </Stack>
    </Box>
}

export default AdminLayout