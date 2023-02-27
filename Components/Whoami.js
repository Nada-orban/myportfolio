import React from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container } from '@mui/material'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import profilePic from "../public/assets/images/331965059_558608126252058_1288838992658643328_n.jpg"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import Nav2 from './Nav2'
// import videobackground from "../public/assets/images/Pexels_Videos_2833.mp4"
// import styles from "../styles/Whomi.module.css"


function Whoami() {
    return (

        <Box padding="200px 0px 300px 0px" id="home" className={styles.backgroundimage} >
            <Nav2 />
            {/* <video
                id="background-video"
                loop
                autoPlay
                muted
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "15rem",
                    left: 0,
                    top: 0,
                    objectFit: "cover",
                    zIndex: "-1",
                }}
            >
                <source src={videobackground} type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
            <Container>
                <Grid container direction="column" justifyContent="center" alignItems="center"
                >
                    <Box borderRadius="50%" width="200px" height="200px" overflow="hidden" backgroundColor="red" marginBottom="20px">
                        <Image
                            src={profilePic}
                            alt="Picture of the author"
                            width={200}
                            height={200}
                        />
                    </Box >
                    <div className={styles.containertext}>
                        <div className={styles.typedout}>Nada Orban</div>
                    </div>
                    {/* <Typography variant='h2'>Nada Orban</Typography> */}
                    <Typography variant='h4' className="animate__animated animate__bounce">FRONT END DEVELOPER</Typography>
                </Grid>
                <Box display="flex" justifyContent="center" marginY="30px" gap="15px">
                    <Box borderRadius="10px" p="1" >
                        <a href="https://www.facebook.com/2447.nada.samir">
                            <FacebookIcon sx={{ width: "40px", height: "40px", color: "#3b5998" }} />
                        </a>
                    </Box>
                    <Box borderRadius="10px" p="1" >
                        <a href='https://github.com/Nada-orban'>
                            < GitHubIcon sx={{ width: "40px", height: "40px", color: "black" }} />
                        </a>
                    </Box>
                    <Box borderRadius="10px" p="1" >
                        <a href='https://www.linkedin.com/in/nada-samir-441a58130/'>
                            <LinkedInIcon sx={{ width: "40px", height: "40px", color: "#0e76a8" }} />
                        </a>
                    </Box>
                    <Box borderRadius="10px" p="1" >
                        <a href=''>
                            <WhatsAppIcon sx={{ width: "40px", height: "40px", color: "#075e54" }} />
                        </a>
                    </Box>
                    <Box borderRadius="10px" p="1" >
                        <a href='nadasamir9334@gmail.com'>
                            <EmailIcon sx={{ width: "40px", height: "40px", color: "#c71610" }} />
                        </a>
                    </Box>

                </Box>




            </Container>
        </Box>



    )
}

export default Whoami

// {/* <Grid container spacing={2}>
//                     <Grid item xs={9} md={9}>
//                         <Typography variant="h3" component="h2">
//                             Hello!
//                         </Typography>
//                         <Typography variant="h2" component="h2">
//                             I'm Nada Orban,
//                         </Typography>
//                         <Typography variant="h3" component="h3">
//                             FRONT-END-DEVELOPER
//                         </Typography>
//                         <button >Primary</button>
//                     </Grid>
//                     <Grid item xs={3} md={3} >
//                         <Box borderRadius="50%" width="200px" height="200px" overflow="hidden" backgroundColor="red">
//                             {/* <Image
//                                 src={profilePic}
//                                 alt="Picture of the author"
//                                 width={200}
//                                 height={200}


//                             /> */}
//                         </Box >

//                     </Grid >

//                 </Grid > * /}