import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from 'react-router-dom';



const Nav = () => {
  return (
   
<>
<Box  sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{backgroundColor: '#f5f5dc', width: '100%', height: '50px'}}>
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
         
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 500, fontFamily:'sans-serif',color:'#333333',fontSize:20 }}>
            ProHomeConnect APP
          </Typography>
          
          <nav className="nav" style={{ display: 'flex', gap: '50px',margin:'20px'}}>
            <Link to="/" style={{ color: '#333333', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
            <Link to="/about" style={{ color: '#333333', textDecoration: 'none', fontWeight: 'bold' }}>About Us</Link>
            <Link to="/services" style={{ color: '#333333', textDecoration: 'none', fontWeight: 'bold' }}>Services</Link>
            <Link to="/Login" style={{ color: '#333333', textDecoration: 'none', fontWeight: 'bold' }}>Login</Link>
            <Link to="/Signup" style={{ color: '#333333', textDecoration: 'none', fontWeight: 'bold' }}>Signup</Link>
            <Link to="/Connectus" style={{backgroundColor:"black",color:'white',borderRadius:"20px"}} type="text">Connect with us</Link>
          </nav>
        </Toolbar>
      </AppBar>
    </Box>
   

    </>
  )
}

export default Nav