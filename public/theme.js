import { createContext, useState, useMemo } from "react";
import { createTheme } from '@mui/material/styles';
import { lightGreen, green, brown, grey, lime, red, blue } from '@mui/material/colors';
import { fontSize } from "@mui/system";

export const themeSettongs = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark" ? {
                primary: {
                    main: indigo[600],
                },
                secondary: {
                    main: "rgb(52, 71, 103)",
                },
                neutral: {
                    greenlight: green[300],
                    greendark: green[700],
                    green: green[400],
                    red: red[500],
                    blue: blue[900],
                },
                background: {
                    main: indigo[900],
                    // main: "rgb(52, 71, 103)",
                },
                text: {
                    primary: '#fff',
                    secondary: grey[500],
                },


            } : {
                primary: {
                    main: grey[800],
                },
                secondary: {
                    main: red[400],
                },
                neutral: {
                    brownlight: brown[200],
                    lime: lime[900],
                    green: green[400],
                    red: red[500],
                    blue: blue[900],
                },
                background: {
                    main: grey[100],
                }, text: {
                    primary: "black",
                    secondary: grey[500],
                },

            }),

        },
        typography: {
            fontFamily: ['Josefin Sans', 'sans - serif'].join(", "),
            fontSize: 13,

        },

    }
};


export const ColorModeContext = createContext({
    toggleColorMode: () => { }
});

export const useMode = () => {
    const [mode, setMode] = useState("light");
    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((prev) => (prev === "dark" ? "light" : "dark"))
        }
    }), []);
    const theme = useMemo(() => createTheme(themeSettongs(mode)), [mode]);
    return [theme, colorMode];
};