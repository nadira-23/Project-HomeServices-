// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import { Link, useNavigate } from 'react-router-dom';



// const Nav = () => {
//   return (
   
// <>
// <Box  sx={{ flexGrow: 1 }}>
//       <AppBar position="fixed" sx={{backgroundColor: '#f5f5dc', width: '100%', height: '50px'}}>
//         <Toolbar>
//           <IconButton
//             size="medium"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
         
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 500, fontFamily:'sans-serif',color:'#333333',fontSize:20 }}>
//             ProHomeConnect APP
//           </Typography>
          
//           <nav className="nav" style={{ display: 'flex', gap: '50px',margin:'20px'}}>
//             <Link to="/" style={{ color: '#333333', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
//             <Link to="/about" style={{ color: '#333333', textDecoration: 'none', fontWeight: 'bold' }}>About Us</Link>
//             <Link to="/services" style={{ color: '#333333', textDecoration: 'none', fontWeight: 'bold' }}>Services</Link>
//             <Link to="/Login" style={{ color: '#333333', textDecoration: 'none', fontWeight: 'bold' }}>Login</Link>
//             <Link to="/Signup" style={{ color: '#333333', textDecoration: 'none', fontWeight: 'bold' }}>Signup</Link>
//             <Link to="/Connectus" style={{backgroundColor:"black",color:'white',borderRadius:"20px"}} type="text">Connect with us</Link>
//           </nav>
//         </Toolbar>
//       </AppBar>
//     </Box>
   

//     </>
//   )
// }

// export default Nav


import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ backgroundColor: '#f5f5dc', width: '100%', height: '60px' }}>
          <Toolbar>
            <IconButton size="medium" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              {/* Add any icon if needed */}
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: 500,
                fontFamily: 'sans-serif',
                color: '#333333',
                fontSize: 22,
              }}
            >
              ProHomeConnect APP
            </Typography>

            <nav style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
              <Link
                to="/"
                style={{
                  color: '#333333',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  '&:hover': { color: '#00796b' },
                }}
              >
                Home
              </Link>
              <Link
                to="/about"
                style={{
                  color: '#333333',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  '&:hover': { color: '#00796b' },
                }}
              >
                About Us
              </Link>
              <Link
                to="/services"
                style={{
                  color: '#333333',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  '&:hover': { color: '#00796b' },
                }}
              >
                Services
              </Link>
              <Link
                to="/login"
                style={{
                  color: '#333333',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  '&:hover': { color: '#00796b' },
                }}
              >
                Login
              </Link>
              <Link
                to="/signup"
                style={{
                  color: '#333333',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  '&:hover': { color: '#00796b' },
                }}
              >
                Signup
              </Link>
              <Link
                to="/connectus"
                style={{
                  backgroundColor: '#00796b',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '20px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  '&:hover': { backgroundColor: '#004d40' },
                }}
              >
                Connect with Us
              </Link>
            </nav>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Nav;
