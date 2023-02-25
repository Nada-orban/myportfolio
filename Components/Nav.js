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

            <Box height="350px" width="50px" borderRadius="50px" position="fixed" right="30px" top="30vh" justifyContent="center" className={Styles.nav1} >
                <Box position="relative">
                    <Timeline sx={{ position: "absolute", justifyContent: "center", right: "-5%", top: "15px" }}>
                        <TimelineItem>
                            <TimelineSeparator>
                                <a href='#home' className='active' >
                                    <HomeIcon
                                        className={Styles.icon}

                                    />
                                </a>

                                <TimelineConnector sx={{ marginTop: "5px" }} />
                                <TimelineConnector sx={{ marginTop: "5px" }} />
                                <TimelineConnector sx={{ marginTop: "5px", marginBottom: "5px" }} />
                            </TimelineSeparator>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <a href='#about'>
                                    <Person2Icon className={Styles.icon} />
                                </a>

                                <TimelineConnector sx={{ marginTop: "5px" }} />
                                <TimelineConnector sx={{ marginTop: "5px" }} />
                                <TimelineConnector sx={{ marginTop: "5px", marginBottom: "5px" }} />
                            </TimelineSeparator>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <a href='#skills'>
                                    < SensorOccupiedIcon sx={{ margin: "5px 0px", }} className={Styles.icon} />
                                </a>
                                <TimelineConnector sx={{ marginTop: "5px" }} />
                                <TimelineConnector sx={{ marginTop: "5px" }} />
                                <TimelineConnector sx={{ marginTop: "5px", marginBottom: "5px" }} />
                            </TimelineSeparator>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <a href='#mywork'>
                                    <WorkIcon sx={{ margin: "5px 0px", }} className={Styles.icon} />
                                </a>

                                <TimelineConnector sx={{ marginTop: "5px" }} />
                                <TimelineConnector sx={{ marginTop: "5px" }} />
                                <TimelineConnector sx={{ marginTop: "5px", marginBottom: "5px" }} />
                            </TimelineSeparator>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <a href='#contacts'>
                                    <ConnectWithoutContactIcon sx={{ margin: "5px 0px", }} className={Styles.icon} />
                                </a>
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




