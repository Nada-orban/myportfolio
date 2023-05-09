import { Box, Tabs, Tab, Typography, LinkTab, IconButton } from '@mui/material'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import React from 'react'
import { styled, useTheme, alpha } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import WorkIcon from '@mui/icons-material/Work';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Popover from '@mui/material/Popover';
import Styles from '../styles/Nav.module.css'
import Navicon from './Navicon';
import { Link } from 'react-scroll'



function Nav() {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);

    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);


    return (
        <>

            <Box height="350px" width="50px" borderRadius="50px" position="fixed" right="30px" top="30vh" justifyContent="center"  >
                <Box position="relative">
                    <Timeline sx={{ position: "absolute", justifyContent: "center", right: "-5%", top: "15px" }}>
                        <TimelineItem>
                            <TimelineSeparator>
                                <Link to="home" spy={true} smooth={true} offset={-50} duration={500}  >
                                    <TimelineDot variant="outlined" />
                                    {/* <HomeIcon
                                        className={Styles.icon}

                                    /> */}
                                </Link>

                                <TimelineConnector sx={{ marginTop: "5px" }} />
                                {/* <TimelineConnector sx={{ marginTop: "5px" }} />
                                <TimelineConnector sx={{ marginTop: "5px", marginBottom: "5px" }} /> */}
                            </TimelineSeparator>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <Link to="about" spy={true} smooth={true} offset={-50} duration={500} >
                                    <TimelineDot variant="outlined" />
                                    {/* <Person2Icon className={Styles.icon} /> */}
                                </Link>

                                <TimelineConnector sx={{ marginTop: "5px" }} />
                                {/* <TimelineConnector sx={{ marginTop: "5px" }} />
                                <TimelineConnector sx={{ marginTop: "5px", marginBottom: "5px" }} /> */}
                            </TimelineSeparator>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <Link to="skills" spy={true} smooth={true} offset={-50} duration={500} >
                                    <TimelineDot variant="outlined" />
                                    {/* < SensorOccupiedIcon sx={{ margin: "5px 0px", }} className={Styles.icon} /> */}
                                </Link>
                                <TimelineConnector sx={{ marginTop: "5px" }} />
                                {/* <TimelineConnector sx={{ marginTop: "5px" }} />
                                <TimelineConnector sx={{ marginTop: "5px", marginBottom: "5px" }} /> */}
                            </TimelineSeparator>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <Link href='#mywork'>
                                    <TimelineDot variant="outlined" />
                                    {/* <WorkIcon sx={{ margin: "5px 0px", }} className={Styles.icon} /> */}
                                </Link>

                                <TimelineConnector sx={{ marginTop: "5px" }} />
                                {/* <TimelineConnector sx={{ marginTop: "5px" }} />
                                <TimelineConnector sx={{ marginTop: "5px", marginBottom: "5px" }} /> */}
                            </TimelineSeparator>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <Link href='#contacts'>
                                    <TimelineDot variant="outlined" />
                                    {/* <ConnectWithoutContactIcon sx={{ margin: "5px 0px", }} className={Styles.icon} /> */}
                                </Link>
                            </TimelineSeparator>
                        </TimelineItem>


                    </Timeline>
                    {/* <LinkTab label="Page One" href="/" />
                <LinkTab label="Page Two" href="/" />
                <LinkTab label="Page Three" href="/" /> */}
                </Box>



            </Box>
        </>


    )
}
export default Nav




