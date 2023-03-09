import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import { Box, Container, Fade, Slide } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Styles from '../styles/Nav.module.css'
import { motion } from "framer-motion"
import Person2Icon from '@mui/icons-material/Person2';
import WorkIcon from '@mui/icons-material/Work';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'
import CloseIcon from '@mui/icons-material/Close';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fab from '@mui/material/Fab';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { ColorModeContext } from '../public/theme'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


const drawerWidth = 240;


//dark mode button
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));

//hide navbar
function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}
HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};


//appear vertical navbar
// function ScrollTop(props) {
//     const { children, window } = props;
//     // Note that you normally won't need to set the window ref as useScrollTrigger
//     // will default to window.
//     // This is only being set here because the demo is in an iframe.
//     const trigger = useScrollTrigger({
//         target: window ? window() : undefined,
//         disableHysteresis: true,
//         threshold: 100,
//     });

//     const handleClick = (event) => {
//         const anchor = (event.target.ownerDocument || document).querySelector(
//             '#back-to-top-anchor',
//         );

//         if (anchor) {
//             anchor.scrollIntoView({
//                 block: 'center',
//             });
//         }
//     };

//     return (
//         <Fade in={trigger}>
//             <Box
//                 onClick={handleClick}
//                 role="presentation"
//                 sx={{ position: 'fixed', bottom: 16, right: 16 }}
//             >
//                 {children}
//             </Box>
//         </Fade>
//     );
// }

// ScrollTop.propTypes = {
//     children: PropTypes.element.isRequired,
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window: PropTypes.func,
// };




//function of the navbar

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();


    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };


    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{
            textAlign: 'center', backgroundColor: "background.main",
            color: "white", height: "100vh", pt: 3, borderTopRightRadius: "20px", borderBottomRightRadius: "20px",
        }}>

            <IconButton >
                <CloseIcon sx={{ color: "secondary.main", position: "absolute", left: "90px" }} />

            </IconButton>
            {/* 
            <Typography variant="h6" sx={{ my: 2 }}>
                nada
            </Typography> */}


            <List sx={{ display: "grid", direction: "column", justifyContent: "center", my: 3 }} >
                <ListItem>
                    <a href="#home">
                        <ListItemButton className={Styles.drawer_icon}>
                            <HomeIcon sx={{ color: "secondary.main", width: "50px" }} />
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </a>
                </ListItem>
                <ListItem>
                    <a href="#about">
                        <ListItemButton className={Styles.drawer_icon}>
                            <Person2Icon sx={{ mx: 2 }} />
                            <ListItemText primary="About" />
                        </ListItemButton>
                    </a>
                </ListItem>
                <ListItem>
                    <a href="#skills">
                        <ListItemButton className={Styles.drawer_icon}>
                            < SensorOccupiedIcon sx={{ mx: 2 }} />
                            <ListItemText primary="Skills" />
                        </ListItemButton>
                    </a>
                </ListItem>
                <ListItem>
                    <a href="#projects">
                        <ListItemButton className={Styles.drawer_icon}>
                            <WorkIcon sx={{ mx: 2 }} />
                            <ListItemText primary="Projects" />
                        </ListItemButton>
                    </a>
                </ListItem>
                <ListItem>
                    <a href="#contact">
                        <ListItemButton className={Styles.drawer_icon}>
                            <ConnectWithoutContactIcon sx={{ mx: 2 }} />
                            <ListItemText primary="Contact" />
                        </ListItemButton>
                    </a>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box sx={{ display: 'flex' }} >
                <CssBaseline />
                <HideOnScroll {...props}>
                    <AppBar variant="permanent" sx={{
                        backgroundColor: 'background.main', color: "white", borderStyle: "none"
                    }} className="animate__animated animate__fadeInDown">
                        <Container>
                            <Toolbar>
                                <Box display='flex' flexGrow={1}>
                                    <Typography
                                        variant="h6"
                                        component="div"
                                        sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' }, color: "secondary.main", mt: 3 }}
                                    >
                                        NADA
                                    </Typography>
                                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                        <List sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                                            <ListItem>
                                                <a href="#home">
                                                    <ListItemButton >
                                                        <HomeIcon sx={{ color: "secondary.main", width: "30px", height: "30px" }} />
                                                    </ListItemButton>
                                                </a>
                                            </ListItem>
                                            <ListItem>
                                                <a href="#about">
                                                    <ListItemButton sx={{ textAlign: 'center' }}>
                                                        <ListItemText primary="About" className={Styles.icon} />
                                                    </ListItemButton>
                                                </a>
                                            </ListItem>
                                            <ListItem>
                                                <a href="#skills">
                                                    <ListItemButton sx={{ textAlign: 'center' }}>
                                                        <ListItemText primary="Skills" />
                                                    </ListItemButton>
                                                </a>
                                            </ListItem>
                                            <ListItem>
                                                <a href="#projects">
                                                    <ListItemButton sx={{ textAlign: 'center' }}>
                                                        <ListItemText primary="Projects" />
                                                    </ListItemButton>
                                                </a>
                                            </ListItem>
                                            <ListItem>
                                                <a href="#contact">
                                                    <ListItemButton sx={{ textAlign: 'center' }}>
                                                        <ListItemText primary="Contact" />
                                                    </ListItemButton>
                                                </a>
                                            </ListItem>
                                            <FormGroup>
                                                <FormControlLabel
                                                    control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked onClick={colorMode.toggleColorMode} />}
                                                />
                                            </FormGroup>
                                        </List>



                                    </Box>

                                </Box>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerToggle}
                                    sx={{ display: { sm: 'none' } }}
                                >
                                    <MenuIcon />
                                </IconButton>

                            </Toolbar>
                        </Container>

                    </AppBar>

                </HideOnScroll>
                <Box component="nav">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box', width: drawerWidth,
                                borderTopRightRadius: "20px", borderBottomRightRadius: "20px", boxShadow: "none"
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>

            </Box >
            {/* <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>

            </ScrollTop> */}

        </>
    );
}

// DrawerAppBar.propTypes = {
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window: PropTypes.func,
// };

export default DrawerAppBar;