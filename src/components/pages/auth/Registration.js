import { TextField, FormControlLabel, Checkbox, Button, Box, Alert, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';

const Registration = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })
  const [UserType,setUser]=useState()
  const UserInfo=['User','Merchant']

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      password_confirmation: data.get('password_confirmation'),
      user_Type:data.get('UserType'),
      tc: data.get('tc'),

    }
    if (actualData.name && actualData.email && actualData.password && actualData.password_confirmation && actualData.tc !== null) {
      if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        document.getElementById('registration-form').reset()
        setError({ status: true, msg: "Registration Successful", type: 'success' })
        navigate('/dashboard')
      } else {
        setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: 'error' })
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }
  }
  return <>
    <Box component='form' noValidate sx={{ mt: 1 }} id='registration-form' onSubmit={handleSubmit}>
      <TextField margin='normal' required fullWidth id='name' name='name' label='Name' />
      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
      <TextField margin='normal' required fullWidth id='password_confirmation' name='password_confirmation' label='Confirm Password' type='password' />
      {/* <FormControlLabel margin='normal' required fullWidth variant ='flex' sx={{  width: 1/2,
  pl : 1,
  backgroundColor: '#fffff'}} id='demo-simple-select-label' name='user_Type' label='UserType' control={<select  id="demo-simple-select" > <option value={'null'}>Select</option><option value={'user'}>User</option><option value={'Merchant'}>Merchant</option></select>}    /> */}

      <TextField label='Select User Type' name='UserType' value={UserType} onChange={e=>setUser(e.target.value)}
      select
      SelectProps={{}}
      sx={{width:300, marginTop:2}}
      >
        {UserInfo.map((UserType)=>(
          <MenuItem value={UserType} key={UserType}>
            {UserType}
          </MenuItem>
        ))}
      </TextField>

      <FormControlLabel control={<Checkbox value="agree" color="primary" name="tc" id="tc" />} label="I agree to term and condition." />
      <Box textAlign='center'>
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Join</Button>
      </Box>
      {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
    </Box>
  </>;
};

export default Registration;
