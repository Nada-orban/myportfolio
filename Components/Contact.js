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
import jsonfile from '../public/assets/images/Chatting_01 (1).json'
import Lottie from 'lottie-react'

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
        <Box id="contact" pt="10vh" pb="20vh" backgroundColor="background.secondary" position="relative">
            <Container>
                <Typography variant="h2" component="h2" sx={{ textAlign: "center", mb: 6, color: "text.primary" }}>
                    Contact <span className={styles.spancolor}>Me</span>
                </Typography>
                <Grid container spacing={10} sx={{ mt: 3 }}>
                    <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px" }}>
                        <TextField
                            id="name"
                            label="Name"
                            color="secondary"
                            focused
                            InputLabelProps={{ style: { fontSize: 23, marginTop: -15, marginLeft: -10 } }}

                        />
                        <TextField
                            id="email"
                            label="Email"
                            color="secondary"
                            focused
                            InputLabelProps={{ style: { fontSize: 23, marginTop: -15, marginLeft: -10 } }}
                        />
                        <TextField
                            id="message"
                            label="Message"
                            color="secondary"
                            multiline
                            rows={4}
                            focused
                            InputLabelProps={{ style: { fontSize: 23, marginTop: -15, marginLeft: -10 } }}
                        />
                        <button className={styles.buttonStyle}>Send </button>

                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", gap: "40px", }}>
                        <Box display="flex" gap="20px">
                            <Avatar className={styles.iconContact}><AlternateEmailIcon /></Avatar>
                            <Typography variant='h5' sx={{ color: "text.primary"}}>nadasamir9334@gmail.com</Typography>
                        </Box>
                        <Box display="flex" gap="20px">
                            <Avatar className={styles.iconContact}><CallIcon /></Avatar>
                            <Typography variant='h5' sx={{ color: "text.primary"}}>+1 01149629334</Typography>
                        </Box>
                        <Box display="flex" gap="30px" mt="20px">
                            <a href="https://www.facebook.com/2447.nada.samir">
                                <Avatar className={styles.iconContact}  ><FacebookIcon /></Avatar>
                            </a>
                            <a href='https://github.com/Nada-orban'>
                                <Avatar className={styles.iconContact}  ><GitHubIcon /></Avatar>
                            </a>
                            <a href='https://www.linkedin.com/in/nada-samir-441a58130/'>
                                <Avatar className={styles.iconContact}  ><LinkedInIcon /></Avatar></a>
                            <a href=''>
                                <Avatar className={styles.iconContact}  >< WhatsAppIcon /></Avatar>
                            </a>
                            <a href='nadasamir9334@gmail.com'>
                                <Avatar className={styles.iconContact}  ><EmailIcon /></Avatar>
                            </a>
                        </Box>


                    </Grid>



                </Grid>





            </Container>
            <Box width="500px" height="400px" position="absolute" bottom="30px" right="0px">
                <Lottie animationData={jsonfile} />

            </Box>

        </Box >
    )
}

export default Contact