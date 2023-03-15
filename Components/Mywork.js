import React from 'react'
import { Box, Container, Typography, Grid, Paper, Card, CardContent, CardMedia, CardActionArea, CardActions, IconButton } from '@mui/material';
import styles from '../styles/Home.module.css'
import { BiCodeAlt } from 'react-icons/bi'
import { BsPlayFill } from 'react-icons/bs'
import Resto from '../public/assets/projects/Screenshot from 2023-03-01 13-31-38.png'
import shoponline from '../public/assets/projects/Screenshot from 2023-03-01 23-34-07.png'
import image3 from '../public/assets/projects/Screenshot from 2023-03-01 23-37-42.png'
import image4 from '../public/assets/projects/Screenshot from 2023-03-03 14-23-41.png'
import dashboardimage from '../public/assets/projects/Screenshot from 2023-03-07 21-36-22.png'
import storeimage from '../public/assets/projects/Screenshot from 2023-03-07 23-03-28.png'
import Image from 'next/image'


function Mywork() {
    return (
        <Box id="projects" py="10vh">
            <Container Container >
                <Box className={styles.slider} >
                    <Typography variant='h2' sx={{ textAlign: "center", color: "text.primary" }} data-aos="flip-up">
                        <span className={styles.spancolor}>My</span> Work
                    </Typography>
                </Box>
                <Grid container spacing={2} sx={{ my: 6, }}>
                    <Grid item xs={12} md={4} data-aos="fade-right">
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
                                alignItems: "center", overflow: "hidden", position: "relative", height: "100px", px: 3, backgroundColor: "white"
                            }}>
                                <Box className={styles.demobox}>
                                    <Box className={styles.infobox1}><Typography>Live Demo</Typography></Box>
                                    <a href='https://restosamir.netlify.app' ><IconButton className={styles.cardbutton} ><BsPlayFill style={{ color: "black" }} /></IconButton></a>

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
                    <Grid item xs={12} md={4} data-aos="fade-down" data-aos-delay="500" >
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
                                alignItems: "center", overflow: "hidden", position: "relative", height: "100px", px: 3, backgroundColor: "white"
                            }}>
                                <Box className={styles.demobox}>
                                    <Box className={styles.infobox1}><Typography>Live Demo</Typography></Box>
                                    <a href='https://shop-0nline.netlify.app/'><IconButton className={styles.cardbutton} ><BsPlayFill style={{ color: "black" }} /></IconButton></a>

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
                    <Grid item xs={12} md={4} data-aos="fade-left">
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
                                alignItems: "center", overflow: "hidden", position: "relative", height: "100px", px: 3, backgroundColor: "white"
                            }}>
                                <Box className={styles.demobox}>
                                    <Box className={styles.infobox1}><Typography>Live Demo</Typography></Box>
                                    <a href='https://fastfoodweb-nadaorban.netlify.app/'><IconButton className={styles.cardbutton} ><BsPlayFill style={{ color: "black" }} /></IconButton></a>

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
                    <Grid item xs={12} md={4} data-aos="fade-right" data-aos-delay="300" >
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
                                alignItems: "center", overflow: "hidden", position: "relative", height: "100px", px: 3, backgroundColor: "white"
                            }}>
                                <Box className={styles.demobox}>
                                    <Box className={styles.infobox1}><Typography>Live Demo</Typography></Box>
                                    <a href=''><IconButton className={styles.cardbutton} ><BsPlayFill style={{ color: "black" }} /></IconButton></a>

                                </Box>

                                <Box className={styles.codebox}>
                                    <IconButton className={styles.cardbutton}><BiCodeAlt style={{ color: "black" }} /></IconButton>
                                    <Box className={styles.infobox2}>
                                        <Typography>HTML & CSS </Typography>
                                        <Typography> BOOTSTRAP</Typography>
                                        <Typography>  REACT</Typography>
                                    </Box>
                                </Box>
                            </CardActions>
                        </Card>

                    </Grid>
                    <Grid item xs={12} md={4} data-aos="fade-up" data-aos-delay="500" >
                        <Card sx={{ maxWidth: 330, borderRadius: "10px", cursor: "pointer" }} className={styles.projectCard}>
                            <CardActionArea>
                                <CardMedia className={styles.imageCard}>
                                    <Image
                                        src={dashboardimage}
                                        alt="Picture of the project"
                                        width={330}
                                        height={180}
                                    />
                                    <Box className={styles.textCard}>
                                        <Typography>Dashboard</Typography>
                                    </Box>
                                </CardMedia>

                            </CardActionArea>
                            <CardActions sx={{
                                display: "flex", justifyContent: "space-between",
                                alignItems: "center", overflow: "hidden", position: "relative", height: "100px", px: 3, backgroundColor: "white"
                            }}>
                                <Box className={styles.demobox}>
                                    <Box className={styles.infobox1}><Typography>Live Demo</Typography></Box>
                                    <a href=''><IconButton className={styles.cardbutton} ><BsPlayFill style={{ color: "black" }} /></IconButton></a>

                                </Box>

                                <Box className={styles.codebox}>
                                    <IconButton className={styles.cardbutton}><BiCodeAlt style={{ color: "black" }} /></IconButton>
                                    <Box className={styles.infobox2}>
                                        <Typography>HTML & CSS </Typography>
                                        <Typography> Material UI</Typography>
                                        <Typography> NEXT</Typography>
                                    </Box>
                                </Box>
                            </CardActions>
                        </Card>

                    </Grid>
                    <Grid item xs={12} md={4} data-aos="fade-left" data-aos-delay="300" >
                        <Card sx={{ maxWidth: 330, borderRadius: "10px", cursor: "pointer" }} className={styles.projectCard}>
                            <CardActionArea>
                                <CardMedia className={styles.imageCard}>
                                    <Image
                                        src={storeimage}
                                        alt="Picture of the project"
                                        width={330}
                                        height={180}
                                    />
                                    <Box className={styles.textCard}>
                                        <Typography>Store</Typography>
                                    </Box>
                                </CardMedia>

                            </CardActionArea>
                            <CardActions sx={{
                                display: "flex", justifyContent: "space-between",
                                alignItems: "center", overflow: "hidden", position: "relative", height: "100px", px: 3, backgroundColor: "white"
                            }}>
                                <Box className={styles.demobox}>
                                    <Box className={styles.infobox1}><Typography>Live Demo</Typography></Box>
                                    <a href=''><IconButton className={styles.cardbutton} ><BsPlayFill style={{ color: "black" }} /></IconButton></a>

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