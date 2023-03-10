import React from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper } from '@mui/material'
import styles from '../styles/Home.module.css'
import jsonfile from '../public/assets/images/soft_dev (3).json'
import Lottie from 'lottie-react'
import { styled, useTheme, alpha } from '@mui/material/styles';
import profilePic from "../public/assets/images/profile.jpg"
import Image from 'next/image'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function About() {
    return (
        <Box id="about" py="15vh" className={styles.aboutbackground}>
            <Container>
                <Typography variant="h2" component="h2" sx={{ textAlign: "center", mb: 4 }}>
                    About <span className={styles.spancolor}>Me</span>
                </Typography>
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12} sx={{ padding: "0px 0px", mb: 3 }}>
                        {/* <Lottie animationData={jsonfile} /> */}
                        <Box width="420px" height="420px" p="10px" className={styles.photobox} >


                            <Image
                                src={profilePic}
                                alt="Picture of the author"
                                width={400}
                                height={400}
                                className={styles.photo}

                            />
                        </Box >

                    </Grid>
                    <Grid item md={6} xs={12} sx={{ padding: "0px 0px", mt: 4 }}>
                        <Typography variant='h5' sx={{ my: 2 }}>
                            I have a broad range of skills and expertise in various technologies
                            so I can create visually appealing and interactive user interfaces, and work on the back-end to ensure that those interfaces are fully functional and performant,<br />
                            My experience with Next.js, Node.js, and Express suggests that i  have knowledge of server-side programming, which is essential for creating full-stack applications.
                        </Typography>
                        <Typography variant='h5' sx={{ my: 2 }}>

                            I can also find solutions to complex challenges in the development process. I have a keen eye for detail, and i take pride in ensuring that my work is error-free and adheres to industry standards.
                        </Typography>
                    </Grid>



                </Grid>
            </Container>
        </Box>
    )
}

export default About