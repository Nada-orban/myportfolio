import React, { useEffect } from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Avatar } from '@mui/material'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import profilePic from "../public/assets/images/profile.jpg"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import jsonfile from '../public/assets/images/soft_dev (3).json'
import Lottie from 'lottie-react'
import { styled, useTheme, alpha } from '@mui/material/styles';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Link from 'next/link'

function Myself() {
    const theme = useTheme();


    return (

        <Box id="home" className={styles.backgroundimage} >
            <Container>
                <Grid container  >
                    <Grid md={6} xs={12} sx={{ mt: 18 }}>
                        <Typography variant='h3' data-aos="fade-up" >Hello,I'm</Typography>
                        <div className={styles.containertext}>

                            <div className={styles.typedout} data-aos="fade-up" data-aos-delay="500">Nada Orban</div>
                        </div>
                        {/* <Typography variant='h2'>Nada Orban</Typography> */}
                        <Typography variant='h4' data-aos="fade-up" data-aos-delay="1000">FRONT END DEVELOPER</Typography>
                        <Link href=""><button className={styles.buttonStyle} data-aos="fade-up" data-aos-delay="1500">Download My CV</button></Link>
                    </Grid>


                    <Grid md={6} xs={12} data-aos="zoom-in"   >
                        <Box className={styles.WhoamiAnimation} >
                            <Lottie animationData={jsonfile} />
                        </Box>
                    </Grid>
                </Grid>


                <Box display="flex" gap="30px" mt="20px" className={styles.contactionbox}>
                    {/* <a href="https://www.facebook.com/2447.nada.samir">
                        <Avatar sx={{
                            bgcolor: "white"
                        }} ><FacebookIcon /></Avatar>
                    </a> */}
                    <a href='https://github.com/Nada-orban' data-aos="fade-left">
                        <Avatar className={styles.icon}><GitHubIcon sx={{ color: "black" }} /></Avatar>
                    </a>
                    <a href='https://www.linkedin.com/in/nada-samir-441a58130/' data-aos="fade-left" data-aos-delay="200">
                        <Avatar className={styles.icon} >
                            <LinkedInIcon sx={{ color: "black" }} /></Avatar>
                    </a>
                    <a href='' data-aos="fade-left" data-aos-delay="500">
                        <Avatar className={styles.icon}>< WhatsAppIcon sx={{ color: "black" }} /></Avatar>
                    </a>
                    <a href='mailto:nadasamir9334@gmail.com' data-aos="fade-left" data-aos-delay="800">
                        <Avatar className={styles.icon} ><EmailIcon sx={{ color: "black" }} /></Avatar>
                    </a>

                </Box>


                <a href="#about"><KeyboardDoubleArrowDownIcon sx={{
                    width: "50px", height: "50px", color: "secondary.main",
                    position: "absolute", left: "50%", bottom: "30px", cursor: "pointer"
                }} className={styles.arrow} /></a>


            </Container >
        </Box >



    )
}

export default Myself