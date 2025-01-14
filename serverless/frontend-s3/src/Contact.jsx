import { Box, TextField, Typography } from '@mui/material';
import './Contact.css';

function Contact() {
    return (
        <Box className='contactpage'>
            <Typography variant='h5'>Contact Next Level Builders, LLC</Typography>
            <Typography variant='body1'>
                Please fill out the contact 
                form below, click send, and we will get back with you shortly 
            </Typography>
            <Box className='contactpage-fields'>
                <Typography>
                    Test
                </Typography>
                <TextField>
                </TextField>
            </Box>
        </Box>
    );
}

export default Contact;