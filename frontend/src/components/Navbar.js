import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Estações', path: '/stations' },
  ];

  const drawer = (
    <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
      <List>
        {menuItems.map((item) => (
          <ListItem 
            key={item.text} 
            component={Link} 
            to={item.path} 
            sx={{ textAlign: 'center', cursor: 'pointer' }}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'primary.main' }}>
        <Toolbar>
          <img 
              src={`${process.env.PUBLIC_URL}/logo.svg`} 
              alt="Logo" 
              style={{ width: '30px', height: '30px', marginRight: '10px' }} 
          />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
           Garbage status
          </Typography>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'block', sm: 'none' } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component={Link}
                to={item.path}
                sx={{ marginLeft: 1 }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
