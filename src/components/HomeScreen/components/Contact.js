import React from 'react';
//imports
import '../Css/contact.css';
//Components
import { Button, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
//Files
import img2 from '../images/contact.svg';

const Contact = () => {
  return (
    <>
      <div className="componente-madre">
        <img className="contac-img" src={img2} alt="contact" />
        <form className="form-contac">
          <Typography variant="h3">Contact us</Typography>
          <Typography>
            Send us an email with all your doubts, we will be reaching you as
            soon as possible.
          </Typography>
          <TextField
            sx={{ mb: 1 }}
            margin="none"
            required
            id="name"
            label="Name"
            variant="outlined"
          />
          <TextField
            sx={{ mb: 1 }}
            margin="none"
            required
            id="email"
            label="Email"
            variant="outlined"
          />
          <TextField
            sx={{ mb: 1 }}
            margin="none"
            required
            id="message"
            label="Message"
            multiline
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            endIcon={<SendIcon />}
          >
            {' '}
            Send{' '}
          </Button>
        </form>
      </div>
    </>
  );
};

export default Contact;
