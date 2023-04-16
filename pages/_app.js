import '../styles/globals.css'
import { useEffect } from "react";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ColorModeContext, useMode } from '../public/theme'
import { useRouter } from 'next/router';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Nav2 from '../Components/Nav2';
import AOS from "aos";

import "aos/dist/aos.css";


export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 400,
      duration: 1000,
    });
  }, []);
  const [theme, colorMode] = useMode();
  const router = useRouter();
  const { Path } = router;


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav2 />
        <Component {...pageProps} />
        <style jsx global>{`
              ${theme.palette.mode === 'dark' ? "body{background:#1c1d24} " : "body{background: #fff} "}`
        }</style>


      </ThemeProvider>
    </ColorModeContext.Provider>

  )
}
