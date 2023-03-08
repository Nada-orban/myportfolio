import React from 'react'
import { Box, Container, Typography, Grid, Paper, Card, CardContent, CardMedia, CardActionArea, CardActions, IconButton } from '@mui/material';
import styles from '../styles/Home.module.css'
import { BiCodeAlt } from 'react-icons/bi'
import { BsPlayFill } from 'react-icons/bs'
import Resto from '../public/assets/projects/Screenshot from 2023-03-01 13-31-38.png'
import shoponline from '../public/assets/projects/Screenshot from 2023-03-01 23-34-07.png'
import image3 from '../public/assets/projects/Screenshot from 2023-03-01 23-37-42.png'
import image4 from '../public/assets/projects/Screenshot from 2023-03-03 14-23-41.png'
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
                                alignItems: "center", overflow: "hidden", position: "relative", height: "100px", px: 3,
                            }}>
                                <Box className={styles.demobox}>
                                    <Box className={styles.infobox1}><Typography>Live Demo</Typography></Box>
                                    <IconButton className={styles.cardbutton} ><BsPlayFill style={{ color: "black" }} /></IconButton>
                                </Box>

                                <Box className={styles.codebox}>
                                    <IconButton className={styles.cardbutton}><BiCodeAlt style={{ color: "black" }} /></IconButton>
                                    <Box className={styles.infobox2}>
                                        <Typography>HTML & CSS</Typography>
                                        <Typography>JAVASCRIPT</Typography>
                                    </Box>
                                </Box>
                            </CardActions>
                        </Card>

                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 330, borderRadius: "10px", cursor: "pointer" }} className={styles.projectCard}>
                            <CardActionArea>
                                <CardMedia className={styles.imageCard}>
                                    <Image
                                        src={shoponline}
                                        alt="Picture of the project"
                                        width={330}
                                        height={180}
                                    />
                                    <Box className={styles.textCard}>
                                        <Typography>Furniture Shop</Typography>
                                    </Box>
                                </CardMedia>

                            </CardActionArea>
                            <CardActions sx={{
                                display: "flex", justifyContent: "space-between",
                                alignItems: "center", overflow: "hidden", position: "relative", height: "100px", px: 3,
                            }}>
                                <Box className={styles.demobox}>
                                    <Box className={styles.infobox1}><Typography>Live Demo</Typography></Box>
                                    <IconButton className={styles.cardbutton} ><BsPlayFill style={{ color: "black" }} /></IconButton>
                                </Box>

                                <Box className={styles.codebox}>
                                    <IconButton className={styles.cardbutton}><BiCodeAlt style={{ color: "black" }} /></IconButton>
                                    <Box className={styles.infobox2}>
                                        <Typography>HTML & CSS</Typography>
                                        <Typography>JAVASCRIPT</Typography>
                                        <Typography>BOOTSTRAP</Typography>
                                    </Box>
                                </Box>
                            </CardActions>
                        </Card>

                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 330, borderRadius: "10px", cursor: "pointer" }} className={styles.projectCard}>
                            <CardActionArea>
                                <CardMedia className={styles.imageCard}>
                                    <Image
                                        src={image3}
                                        alt="Picture of the project"
                                        width={330}
                                        height={180}
                                    />
                                    <Box className={styles.textCard}>
                                        <Typography>Fast Food </Typography>
                                    </Box>
                                </CardMedia>

                            </CardActionArea>
                            <CardActions sx={{
                                display: "flex", justifyContent: "space-between",
                                alignItems: "center", overflow: "hidden", position: "relative", height: "100px", px: 3,
                            }}>
                                <Box className={styles.demobox}>
                                    <Box className={styles.infobox1}><Typography>Live Demo</Typography></Box>
                                    <IconButton className={styles.cardbutton} ><BsPlayFill style={{ color: "black" }} /></IconButton>
                                </Box>

                                <Box className={styles.codebox}>
                                    <IconButton className={styles.cardbutton}><BiCodeAlt style={{ color: "black" }} /></IconButton>
                                    <Box className={styles.infobox2}>
                                        <Typography>HTML & CSS</Typography>
                                        <Typography>JAVASCRIPT</Typography>
                                        <Typography>BOOTSTRAP</Typography>
                                    </Box>
                                </Box>
                            </CardActions>
                        </Card>

                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 330, borderRadius: "10px", cursor: "pointer" }} className={styles.projectCard}>
                            <CardActionArea>
                                <CardMedia className={styles.imageCard}>
                                    <Image
                                        src={image4}
                                        alt="Picture of the project"
                                        width={330}
                                        height={180}
                                    />
                                    <Box className={styles.textCard}>
                                        <Typography>Bus</Typography>
                                    </Box>
                                </CardMedia>

                            </CardActionArea>
                            <CardActions sx={{
                                display: "flex", justifyContent: "space-between",
                                alignItems: "center", overflow: "hidden", position: "relative", height: "100px", px: 3,
                            }}>
                                <Box className={styles.demobox}>
                                    <Box className={styles.infobox1}><Typography>Live Demo</Typography></Box>
                                    <IconButton className={styles.cardbutton} ><BsPlayFill style={{ color: "black" }} /></IconButton>
                                </Box>

                                <Box className={styles.codebox}>
                                    <IconButton className={styles.cardbutton}><BiCodeAlt style={{ color: "black" }} /></IconButton>
                                    <Box className={styles.infobox2}>
                                        <Typography>HTML & CSS </Typography>
                                        <Typography> BOOTSTRAP</Typography>
                                        <Typography> REACT</Typography>
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