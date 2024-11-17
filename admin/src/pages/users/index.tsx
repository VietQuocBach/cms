import { Box, Container, Table, TableCell, TableContainer, TableHead, Typography } from "@mui/material";

function UsersPage() {
    return <Box display={"flex"} flex={1} minHeight={"100%"} >
        <Container>
            <TableContainer sx={{ border: 1, borderColor: 'divider', borderRadius: 2 }}>
                <Table>
                    <TableHead>
                        <TableCell>
                            <Typography fontWeight={600}>Name</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography fontWeight={600}>Email</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography fontWeight={600}>Last login</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography fontWeight={600}>Last activity</Typography>
                        </TableCell>
                    </TableHead>
                </Table>
            </TableContainer>
        </Container>
    </Box>
}

export default UsersPage;