import axios from "axios";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import Turnstile, { useTurnstile } from "react-turnstile";
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const turnstile = useTurnstile();
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <Box className="contactpage">
      <Typography variant="h5">Contact Next Level Builders, LLC</Typography>
      <Typography variant="body1">
        Please fill out the contact form below, click send, and we will get back
        with you shortly
      </Typography>
      <form className="contactpage-form" onSubmit={handleSubmit}>
        <FormControl className="contactpage-fields">
          <TextField
            id="filled-basic"
            label="First Name"
            name="firstName"
            onChange={handleChange}
            required
            variant="filled"
            value={formData.firstName || ""}
          />
          <TextField
            id="filled-basic"
            label="Last Name"
            name="lastName"
            onChange={handleChange}
            required
            variant="filled"
            value={formData.lastName || ""}
          />
          <TextField
            id="filled-basic"
            label="Email"
            name="email"
            onChange={handleChange}
            required
            variant="filled"
            value={formData.email || ""}
          />
          <TextField
            id="filled-basic"
            label="Phone Number"
            name="phoneNumber"
            onChange={handleChange}
            required
            variant="filled"
            value={formData.phoneNumber || ""}
          />
          <TextField
            id="filled-basic"
            label="Subject"
            name="subject"
            onChange={handleChange}
            required
            variant="filled"
            value={formData.subject || ""}
          />
          <TextField
            id="filled-basic"
            label="Body"
            multiline
            name="body"
            onChange={handleChange}
            required
            rows={8}
            variant="filled"
            value={formData.body || ""}
          />
        </FormControl>
        <Turnstile
          sitekey="0x4AAAAAAAkkBPN7ER44-_eD"
          onVerify={async (token) => {
            try {
              const response = await axios.post("/login", { token });
              if (response.status !== 200) {
                turnstile.reset();
              }
            } catch (error) {
              turnstile.reset();
            }
          }}
        />
        <Button variant="contained" type="submit">
          Send
        </Button>
      </form>
    </Box>
  );
}

export default Contact;
