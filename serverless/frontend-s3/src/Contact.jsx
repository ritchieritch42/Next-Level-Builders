import axios from "axios";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = window.turnstile.getResponse(turnstileRef.current);

    // Add the token to the formData
    setFormData((prevData) => ({ ...prevData, token }));
    axios
      .post("http://localhost:3000/contact", { formData })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (
      !document.querySelector(
        'script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.onload = () => {
        if (window.turnstile) {
          window.turnstile.render(".cf-turnstile", {
            sitekey: "0x4AAAAAAAkkBPN7ER44-_eD",
          });
        }
      };
      document.body.appendChild(script);
    }
  }, []);

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
        <Box
          class="cf-turnstile"
          data-sitekey="0x4AAAAAAAkkBPN7ER44-_eD"
          onChange={handleChange}
          value={formData.token || ""}
        />
        <Button variant="contained" type="submit">
          Send
        </Button>
      </form>
    </Box>
  );
}

export default Contact;
