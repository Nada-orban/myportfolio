import React from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper, Avatar } from '@mui/material'
import styles from '../styles/Home.module.css'
import TextField from '@mui/material/TextField';
import { styled, useTheme } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Contact() {
    const theme = useTheme();
    return (
        <Box id="contact" pt="20vh" pb="20vh" >
            <Container>
                <Typography variant="h2" component="h2" sx={{ textAlign: "center", mb: 6 }}>
                    Contact <span className={styles.spancolor}>Me</span>
                </Typography>
                <Grid container spacing={10}>
                    <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px" }}>
                        <TextField
                            id="name"
                            label="Name"
                            color="secondary"
                            focused

                        />
                        <TextField
                            id="email"
                            label="Email"
                            color="secondary"
                            focused
                        />
                        <TextField
                            id="message"
                            label="Message"
                            color="secondary"
                            multiline
                            rows={4}
                            focused
                        />
                        <button className={styles.buttonStyle}>Send </button>

                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                        <Box display="flex" gap="20px">
                            <Avatar sx={{
                                bgcolor: "secondary.main"
                            }}><AlternateEmailIcon /></Avatar>
                            <Typography variant='h5'>nadasamir9334@gmail.com</Typography>
                        </Box>
                        <Box display="flex" gap="20px">
                            <Avatar sx={{
                                bgcolor: "secondary.main"
                            }}><CallIcon /></Avatar>
                            <Typography variant='h5'>+1 01149629334</Typography>
                        </Box>
                        <Box display="flex" gap="30px" mt="20px">
                            <a href="https://www.facebook.com/2447.nada.samir">
                                <Avatar sx={{
                                    bgcolor: "secondary.main"
                                }} ><FacebookIcon /></Avatar>
                            </a>
                            <a href='https://github.com/Nada-orban'>
                                <Avatar sx={{
                                    bgcolor: "secondary.main"
                                }} ><GitHubIcon /></Avatar>
                            </a>
                            <a href='https://www.linkedin.com/in/nada-samir-441a58130/'>
                                <Avatar sx={{
                                    bgcolor: "secondary.main"
                                }} ><LinkedInIcon /></Avatar></a>
                            <a href=''>
                                <Avatar sx={{
                                    bgcolor: "secondary.main"
                                }} >< WhatsAppIcon /></Avatar>
                            </a>
                            <a href='nadasamir9334@gmail.com'>
                                <Avatar sx={{
                                    bgcolor: "secondary.main"
                                }} ><EmailIcon /></Avatar>
                            </a>
                        </Box>

                    </Grid>

                </Grid>




            </Container>
        </Box >
    )
}

export default Contact