import { createTheme } from "@mui/material";
import { indigo, purple } from "@mui/material/colors";

import typography from './typography';

const theme = createTheme({
    palette: {
        primary: {
            light: indigo[500],
            main: indigo[500],
        }
    },
    typography,
})

export default theme