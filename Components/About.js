import React from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container } from '@mui/material'
import styles from '../styles/Home.module.css'


function About() {
    return (
        <Box id="about" pt="10vh">
            <Container>
                <Typography variant="h2" component="h2" sx={{ textAlign: "center" }}>
                    About <span className={styles.spancolor}>Me</span>
                </Typography>
                <Grid container >
                    <Grid md={6} xs={12} sx={{ padding: "100px 0px" }}>
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