import { Avatar, Box, IconButton } from "@mui/material";
import { Icon } from '@iconify/react';
import Logo from './logo'

function Topbar() {
    return <Box display={"flex"} height={64} px={5} alignItems={"center"}>
        <Box component={"a"} width={40} height={40} href="/">
            <Logo />
        </Box>
        <Box display={"flex"} marginLeft={"auto"}>
            <Box display={"flex"} alignItems={"center"}>
                <IconButton >
                    <Icon icon="solar:bell-bing-bold-duotone" style={{ fontSize: '24px' }} />
                </IconButton>
            </Box>
            <IconButton size="small">
                <Avatar src="/default-avatar.webp" />
            </IconButton>
        </Box>
    </Box >
}

export default Topbar