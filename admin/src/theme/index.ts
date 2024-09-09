import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            light: purple[400],
            main: purple[800],
        }
    }
})

export default theme