import { createTheme } from "@mui/material";

const appTheme = createTheme({
    palette: {
        primary: {
            main: '#2A297A'
        },
        common: {
            black: '#131206',
            white: '#FBF4F5'
        }
    },
    typography: {
        fontFamily: 'Inter',
        fontSize: 16,
    }
});

export default appTheme;