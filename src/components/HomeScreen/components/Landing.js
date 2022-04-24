import React from 'react';
import '../Css/landing.css';
import img9 from '../images/interview.svg';
import img10 from '../images/business.svg';

//Icons
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AddIcon from '@mui/icons-material/Add';
import { Button, Fab, Paper, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Search } from '@mui/icons-material';
import { Box } from '@mui/system';

const Landing = () => {
  return (
    <>
      <div className="product-landing">
        <div className="title-landing">
          <MenuIcon />

          <h2 className="landing-h2">Your App</h2>
          <Search />
        </div>

        <div className="medio-landing">
          <img className="interview-img" src={img9} alt="interview" />
          <h2 className="h2-if">If you can see it, you can have it.</h2>
        </div>

        <div>
          <Box
            className="box-business"
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              '& > :not(style)': {
                m: 0.2,
                maxWidth: 90,
                height: 120,
              },
            }}
          >
            <Paper className="paper-project" elevation={3}>
              <p className="p-paper">See all your projects</p>
            </Paper>
            <Paper className="paper-almacen" elevation={3}>
              <p className="p-paper">Follow your warehouse</p>
            </Paper>
            <Paper className="paper-team" elevation={3}>
              <p className="p-paper">Check on your team</p>
            </Paper>
          </Box>
        </div>

        <div className="cont-business">
          <h3 className="business-h2">Manage all your projects in one app</h3>
          <img className="business-img" src={img10} alt="business" />
        </div>

        <div className="div-form-cont">
          <h2 className="h2-contactus">Contact Us</h2>
          <form className="cont-us-landing">
            <TextField
              margin="none"
              required
              id="email"
              label="Email"
              variant="outlined"
            />
            <Button
              sx={{ mt: 1 }}
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

        <div className="abajo-landing">
          <ReceiptLongIcon />
          <CameraAltIcon />
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          <PersonIcon />
          <SettingsIcon />
        </div>
      </div>
    </>
  );
};

export default Landing;
