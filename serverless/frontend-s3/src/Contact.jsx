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
                <TextField id="filled-basic" label="First Name" variant="filled" />
                <TextField id="filled-basic" label="Last Name" variant="filled" />
                <TextField id="filled-basic" label="Email" variant="filled" />
                <TextField id="filled-basic" label="Phone Number" variant="filled" />
                <TextField id="filled-basic" label="Subject" variant="filled" />
                <TextField id="filled-basic" label="Body" multiline variant="filled" rows={8}/>
            </Box>
        </Box>
    );
}

export default Contact;