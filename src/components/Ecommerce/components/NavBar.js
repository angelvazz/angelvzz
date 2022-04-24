import React from 'react';
import '../Css/navbar.css';

//Icons
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { OutlinedInput } from '@mui/material';

//Cart
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const NavBar = () => {
  return (
    <div className="cont-ecommerce-nav">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon color="inherit" />
            </IconButton>
            <Typography
              color="white"
              variant="h6"
              component="div"
              sx={{ flexGrow: 3 }}
            >
              Ecommerce
            </Typography>
            <OutlinedInput
              sx={{ flexGrow: 6 }}
              placeholder="Please enter text"
            />
            <Button variant="contained" href="#contained-buttons">
              <SearchIcon />
            </Button>

            <IconButton sx={{ flexGrow: 0.2 }} aria-label="cart">
              <StyledBadge badgeContent={1} color="warning">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default NavBar;
