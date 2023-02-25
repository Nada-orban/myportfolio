import React from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container } from '@mui/material'


function About() {
    return (
        <Box id="about" >
            <Box padding="100px 0px" width="50%">
                <Typography variant="h2" component="h2">
                    About Me
                </Typography>
                <Typography variant='h5' sx={{ my: 2 }}>
                    I have a broad range of skills and expertise in various technologies
                    so I can create visually appealing and interactive user interfaces, and work on the back-end to ensure that those interfaces are fully functional and performant,<br />
                    My experience with Next.js, Node.js, and Express suggests that i  have knowledge of server-side programming, which is essential for creating full-stack applications.
                </Typography>
                <Typography variant='h5' sx={{ my: 2 }}>

                    I can also find solutions to complex challenges in the development process. I have a keen eye for detail, and i take pride in ensuring that my work is error-free and adheres to industry standards.
                </Typography>
            </Box>


        </Box>
    )
}

export default About