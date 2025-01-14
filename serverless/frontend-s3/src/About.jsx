import { Box, ImageList, ImageListItem, Typography } from '@mui/material';
import './About.css';

const itemData = [
    {
        img: 'craig.jpg',
        title: 'Headshot of Craig Ritchie'
    },
    {
        img: 'ulm-academic-logo-circle.png',
        title: 'University of Louisiana Monroe Logo'
    },
]

function About() {
    return (
        <Box className='aboutpage'>
            <ImageList className='aboutpage-image-list' cols={2} rowHeight={175}>
                {itemData.map((item) => (
                    <ImageListItem className='aboutpage-imagelistitem' key={item.img}>
                        <img
                            alt={item.title}
                            className='aboutpage-image'
                            loading="lazy"
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <Box className='aboutpage-description'>
                <Typography className='aboutpage-description-header' variant='h4'>Craig Ritchie, Owner, 30+ Years in The Industry</Typography>
                <Typography className='aboutpage-text-description-body-text' variant='body1'>
                    Craig has worked in the construction industry since graduating with a
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