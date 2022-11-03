import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return <>
    <Box sx={{ flexGrow: 5  }}>
      <AppBar position="static" color="secondary" sx={{background : "#f44336bd"}}>
        <Toolbar>
          <Typography variant='h4' component="div" sx={{ flexGrow: 2 ,fontFamily:'Book Antiqua'}}>Fyndings</Typography>

          <Button  component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none',mr: 2, paddingLeft: 0 ,fontFamily:'Rockwell',fontSize:20 }}>Home</Button>

          <Button  component={NavLink} to='/contact' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none',mr: 2 ,fontFamily:'Rockwell',fontSize:20 }}>Contact</Button>

          <Button  component={NavLink} to='/login' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' ,mr: 2,fontFamily:'Rockwell',fontSize:20  }}>Login/Registration</Button>

        </Toolbar>
      </AppBar>
    </Box>
  </>;
};

export default Navbar;
