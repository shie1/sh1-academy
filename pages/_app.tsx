import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {Box, Container, createTheme, ThemeProvider} from "@mui/system";
import SearchBar from "@/components/inputs";

const theme = createTheme({
    palette: {
        text: {
            main: "#ffffff",
        },
        background: {
            main: "#1a1a1a",
            paper: "#000"
        },
        primary: {
            main: "#e60000",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#292475",
            contrastText: "#ffffff",
        },
        accent: {
            main: "#8acc33",
            contrastText: "#1a1a1a",
        },
    },
});

export default function App({Component, pageProps}: AppProps) {
    return (<ThemeProvider theme={theme}>
            <Box sx={{
                position: "fixed",
                zIndex: "1000",
                width: "100%",
                paddingTop: "1rem",
                top: "0",
                margin: "auto",
            }}>
                <Container>
                    <Box component="header" sx={{
                        display: "flex",
                        alignItems: "center",
                        height: "4rem",
                        borderRadius: "2rem",
                        justifyContent: "space-between",
                        bgcolor: "background.paper",
                        border: "1px solid #4A4A4A",
                        color: "text.main",
                        padding: "0 1rem",
                        gap: "1rem",
                    }}>
                        <img src="/logo.svg" alt="SH1 Academy" width="64" height="64"/>
                        <SearchBar/>
                    </Box>
                </Container>
            </Box>
            <Box sx={(theme)=>({
                color: theme.palette.text.main,
                paddingTop: "5rem",
            })}>
                <Component {...pageProps} />
            </Box>
        </ThemeProvider>
    );
}
