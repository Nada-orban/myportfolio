import React from 'react'
import { Box, Container, Typography, Grid, Paper, Card, CardContent, CardMedia, CardActionArea, CardActions, IconButton } from '@mui/material';
import styles from '../styles/Home.module.css'
import { BiCodeAlt } from 'react-icons/bi'
import { BsPlayFill } from 'react-icons/bs'
import Resto from '../public/assets/projects/Screenshot from 2023-03-01 13-31-38.png'

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
                        <Card sx={{ maxWidth: 345, borderRadius: "10px" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={Resto}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                            <CardActions sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <IconButton sx={{ border: "1px solid red" }}><BsPlayFill /></IconButton>
                                <IconButton sx={{ border: "1px solid red" }}><BiCodeAlt /></IconButton>
                            </CardActions>
                        </Card>

                    </Grid>

                </Grid>

            </Container >
        </Box >
    )
}

export default Mywork