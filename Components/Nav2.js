import * as React from 'react';
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
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


const drawerWidth = 240;

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
function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Fade>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};




//function of the navbar

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const theme = useTheme();


    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };


    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{
            textAlign: 'center', backgroundColor: "primary.main",
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
                    <AppBar variant="permanent" sx={{ background: 'transparent', color: "white", borderStyle: "none" }} className="animate__animated animate__fadeInDown">
                        <Container>
                            <Toolbar>
                                <Box display='flex' flexGrow={1}>
                                    <Typography
                                        variant="h6"
                                        component="div"
                                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: "secondary.main" }}
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
            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>

            </ScrollTop>

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