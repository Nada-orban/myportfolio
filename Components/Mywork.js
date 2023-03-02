import React from 'react'
import { Box, Container, Typography, Grid, Paper, Card, CardContent, CardMedia, CardActionArea, CardActions, IconButton } from '@mui/material';
import styles from '../styles/Home.module.css'
import { BiCodeAlt } from 'react-icons/bi'
import { BsPlayFill } from 'react-icons/bs'
import Resto from '../public/assets/projects/Screenshot from 2023-03-01 13-31-38.png'
import Image from 'next/image'

function Mywork() {
    return (
        <Box id="Projects" py="10vh">
            <Container Container >
                <Box className={styles.slider} >
                    <Typography variant='h2' sx={{ textAlign: "center" }}>
                        <span className={styles.spancolor}>My</span> Work
                    </Typography>
                </Box>
                <Grid container spacing={2} sx={{ my: 6, }}>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 330, borderRadius: "10px", cursor: "pointer" }} className={styles.projectCard}>
                            <CardActionArea>
                                <CardMedia className={styles.imageCard}>
                                    <Image
                                        src={Resto}
                                        alt="Picture of the project"
                                        width={330}
                                        height={180}
                                    />
                                    <Box className={styles.textCard}>
                                        <Typography>Resto</Typography>
                                    </Box>
                                </CardMedia>

                            </CardActionArea>
                            <CardActions sx={{
                                display: "flex", justifyContent: "space-between",
                                alignItems: "center", overflow: "hidden", position: "relative", height: "100px", px: 3
                            }}>
                                <Box className={styles.demobox}>
                                    <Box className={styles.infobox1}><Typography>Live Demo</Typography></Box>
                                    <IconButton className={styles.playbutton} ><BsPlayFill /></IconButton>
                                </Box>

                                <Box className={styles.codebox}>
                                    <IconButton className={styles.codebutton}><BiCodeAlt /></IconButton>
                                    <Box className={styles.infobox2}>
                                        <Typography>HTML</Typography>
                                        <Typography>CSS</Typography>
                                        <Typography>JAVASCRIPT</Typography>
                                    </Box>
                                </Box>
                            </CardActions>
                        </Card>

                    </Grid>


                </Grid>

            </Container >
        </Box >
    )
}

export default Mywork