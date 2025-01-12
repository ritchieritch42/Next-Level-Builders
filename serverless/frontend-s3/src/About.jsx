import { Box, Typography } from '@mui/material';
import './About.css';

function About() {
    return (
        <Box className='aboutpage'>
            <Box className='aboutpage-text'>
                <Typography variant='h4'>Craig Ritchie, Owner || 30+ Years in The Industry</Typography>
                <Typography variant='body1'>Craig has worked in the construction industry since graduating with a
                    Construction Management degree from the University of Louisiana in
                    Monroe. Craig has managed projects in all types of delivery systems
                    including hard bid, negotiated and design build. He has extensive
                    experience in a wide variety of construction markets including
                    multi-family, light industrial, healthcare, educational, senior living,
                    religious, tenant finish, warehouse construction and commercial building
                    space.
                </Typography>
            </Box>
        </Box>
    );
}

export default About;