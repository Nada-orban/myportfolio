import React from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link'

function MenuNav() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box position="absolute" left="50px" top="50px">
            <IconButton
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ borderRadius: "50%", p: "13px", backgroundColor: "#424242" }}
            >
                <MenuIcon sx={{ color: "white" }} />
            </IconButton>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                PaperProps={{
                    elevation: 0,
                    sx: { backgroundColor: "#424242", color: "white", borderRadius: "50px", height: "250px", width: "50px", pt: 1 }
                }}

            >
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <CloseIcon fontSize="small" sx={{ color: "white" }} />
                    </ListItemIcon>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Link href='/'><HomeIcon fontSize="small" sx={{ color: "white" }} /></Link>

                    </ListItemIcon>
                    <ListItemText>Home</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Link href="/about"><PersonIcon fontSize="small" sx={{ color: "white" }} /></Link>

                    </ListItemIcon>
                    <ListItemText>About</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Link href="/skills"><PsychologyIcon fontSize="small" sx={{ color: "white" }} /></Link>
                    </ListItemIcon>
                    <ListItemText>Projects</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Link href="/project"> <WorkIcon fontSize="small" sx={{ color: "white" }} /></Link>
                    </ListItemIcon>
                    <ListItemText>Skills</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Link href="/contact"><ConnectWithoutContactIcon fontSize="small" sx={{ color: "white" }} /></Link>
                    </ListItemIcon>
                    <ListItemText>Contact</ListItemText>
                </MenuItem>

            </Menu>
        </Box >
    )
}

export default MenuNav