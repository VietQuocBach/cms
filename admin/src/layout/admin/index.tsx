import { useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

import Topbar from "./topbar"
import Sidebar from "./sidebar"
// import DashboardPage from "../../pages/dashboard"
// import UsersPage from "../../pages/users"
// import SettingsPage from "../../pages/settings"

function AdminLayout() {
    // const [loading, setLoading] = useState(false)

    // if (loading) {
    //     return <Box display={"flex"} height={'100vh'} justifyContent={"center"} alignItems={'center'} flexDirection={"column"}>
    //         <Box width={500} flex={1}>
    //             <Typography>Loading...</Typography>
    //             <LinearProgress />
    //         </Box>

    //     </Box>
    // }

    return <div className="flex flex-auto flex-col min-h-full">
        <div className="flex flex-col h-full">
            {/* <Topbar /> */}
            <div className="flex flex-auto">
                <ResizablePanelGroup
                    direction="horizontal"

                    className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
                >
                    <ResizablePanel minSize={5} maxSize={25} defaultSize={25}>
                        <Sidebar />
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={75}>
                        <div className="flex h-full items-center justify-center p-6">
                            <Outlet />
                        </div>
                    </ResizablePanel>
                    <Outlet />
                </ResizablePanelGroup>
            </div>
        </div>
    </div>

    // return <Box display={"flex"} minHeight={'100%'} flex={"1 1 auto"} flexDirection={"column"} >
    //     <Stack direction={"column"} height={"100%"}>
    //         <Topbar />
    //         <Divider />
    //         <Box display={"flex"} flex={1}>
    //             <Sidebar />
    //             <Divider orientation="vertical" />
    //             <Outlet />

    //         </Box>
    //     </Stack>
    // </Box>
}

export default AdminLayout