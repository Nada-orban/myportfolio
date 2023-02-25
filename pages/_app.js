import '../styles/globals.css'
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ColorModeContext, useMode } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';


export default function App({ Component, pageProps }) {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Component {...pageProps} />
        {/* <style jsx global>{`
                    ${theme.palette.mode === 'dark' ? "body{background:#311b92} " : "body{background: rgb(248, 249, 250)} "}`
          }</style> */}


      </ThemeProvider>
    </ColorModeContext.Provider>

  )
}
