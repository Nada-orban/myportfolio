import React, { Component } from 'react'
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Skill1 from '../public/assets/Skills/HTML5_logo_and_wordmark.svg.png'
import Skill2 from '../public/assets/Skills/CSS3_logo_and_wordmark.svg.png'
import Skill3 from '../public/assets/Skills/Unofficial_JavaScript_logo_2.svg.png'
import Skill4 from '../public/assets/Skills/Bootstrap_logo.svg.png'
import Skill5 from '../public/assets/Skills/next-js.svg'
import Skill6 from '../public/assets/Skills/React-icon.svg.png'
import Skill7 from '../public/assets/Skills/logo.png'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


function Skills() {
    const skillsArray = [Skill1, Skill2, Skill3, Skill4, Skill5, Skill6, Skill7]
    return (
        <Box backgroundColor="background.secondary" id="skills" py="10vh">
            <Container>
                <Box className={styles.slider} >

                    <Typography variant='h2' sx={{ textAlign: "center", mb: 3 }}>
                        <span className={styles.spancolor}>My</span> Skills
                    </Typography>

                    <Box className={styles.slideTrack} display="flex" justifyContent="space-between" gap="50px" alignItems="center">
                        {skillsArray.map((skill) => (
                            <Paper sx={{ width: "150px", height: "150px", textAlign: "center", p: "30px", backgroundColor: "white" }} className={styles.paper}>
                                <Image
                                    src={skill}
                                    alt="Picture of the skill"
                                    width={80}
                                    height={80}
                                />
                            </Paper>
                        ))}
                        {skillsArray.map((skill) => (
                            <Paper sx={{ width: "150px", height: "150px", textAlign: "center", p: "30px", backgroundColor: "white" }} className={styles.paper}>
                                <Image
                                    src={skill}
                                    alt="Picture of the author"
                                    width={80}
                                    height={80}
                                />
                            </Paper>
                        ))}

                    </Box>

                </Box>
            </Container>
        </Box>
    )
}

export default Skills