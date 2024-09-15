import { Box, Grid2, MenuItem, styled, Typography } from "@mui/material"
import { Icon } from '@iconify/react';
import { purple } from "@mui/material/colors";
import { Link } from "react-router-dom";

import { useRouteMatch } from "../../hooks/use_route_match";

const LinkMenuItem = styled(MenuItem)(({ }) => ({
    display: 'flex', alignItems: 'center', borderRadius: 12, height: 44, '&.Mui-selected': {
        color: purple[900],
    },
}))

function Sidebar() {
    const routeMatch = useRouteMatch(['/:tabs/*'])
    const currentTab = routeMatch?.params.tabs
    return <Box width={250} height={"100%"}>
        <Box minHeight={"100%"}>
            <Box p={2} gap={6}>
                <Grid2 container flexDirection={"column"}>
                    <LinkMenuItem component={Link} to={"/dashboard"} selected={currentTab === 'dashboard'}>
                        <Box mr={1.5} display={'flex'} alignItems={'center'} fontSize={24}>
                            <Icon icon={currentTab === 'dashboard' ? "solar:chart-square-bold-duotone" : "solar:chart-square-line-duotone"} />
                        </Box>
                        <Box>
                            <Typography variant="subtitle2">Dashboard</Typography>
                        </Box>
                    </LinkMenuItem>
                    <LinkMenuItem component={Link} to={"/users"} selected={currentTab === 'users'}>
                        <Box mr={1.5} display={'flex'} alignItems={'center'} fontSize={24}>
                            <Icon icon={currentTab === 'users' ? "solar:users-group-rounded-bold-duotone" : "solar:users-group-rounded-line-duotone"} />
                        </Box>
                        <Box>
                            <Typography variant="subtitle2">Users</Typography>
                        </Box>
                    </LinkMenuItem>
                    <LinkMenuItem component={Link} to={"/file-manager"} selected={currentTab === 'file-manager'}>
                        <Box mr={1.5} display={'flex'} alignItems={'center'} fontSize={24}>
                            <Icon icon={currentTab === 'file-manager' ? "solar:folder-with-files-bold-duotone" : "solar:folder-with-files-line-duotone"} />
                        </Box>
                        <Box>
                            <Typography variant="subtitle2">File Manager</Typography>
                        </Box>
                    </LinkMenuItem>
                    <LinkMenuItem component={Link} to={"/streams"} selected={currentTab === 'streams'}>
                        <Box mr={1.5} display={'flex'} alignItems={'center'} fontSize={24}>
                            <Icon icon={currentTab === 'streams' ? "solar:play-stream-linear" : "solar:play-stream-outline"} />
                        </Box>
                        <Box>
                            <Typography variant="subtitle2">Streams</Typography>
                        </Box>
                    </LinkMenuItem>
                    <LinkMenuItem component={Link} to={"/videos"} selected={currentTab === 'videos'}>
                        <Box mr={1.5} display={'flex'} alignItems={'center'} fontSize={24}>
                            <Icon icon={currentTab === 'videos' ? "solar:video-library-bold-duotone" : "solar:video-library-line-duotone"} />
                        </Box>
                        <Box>
                            <Typography variant="subtitle2">Videos</Typography>
                        </Box>
                    </LinkMenuItem>
                    <LinkMenuItem component={Link} to={"/settings"} selected={currentTab === 'settings'}>
                        <Box mr={1.5} display={'flex'} alignItems={'center'} fontSize={24}>
                            <Icon icon={currentTab === 'settings' ? "solar:settings-bold-duotone" : "solar:settings-linear"} />
                        </Box>
                        <Box>
                            <Typography variant="subtitle2">Settings</Typography>
                        </Box>
                    </LinkMenuItem>
                </Grid2>
            </Box>
        </Box>
    </Box>
}

export default Sidebar