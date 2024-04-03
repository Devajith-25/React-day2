import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div style={{marginTop:"80px"}}>
        <Typography variant='h3'>Login page</Typography>

        <TextField label="Enter name" variant='outlined'/><br/><br/>
        <TextField type="password" label="password" variant='outlined'/><br/><br/>
        <Button variant="contained" color='success'>Login</Button>
    </div>
    
    
  );
}

export default Login