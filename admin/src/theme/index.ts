import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

import typography from './typography';

const theme = createTheme({
    palette: {
        primary: {
            light: purple[400],
            main: purple[800],
        }
    },
    typography,
})

export default theme