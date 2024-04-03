import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Registration = () => {
  return (
    <div style={{marginTop:"90px"}}>
        <Typography variant='h4'>Registeration Form</Typography>
        <TextField label="Username" variant='standard'/><br/><br/><br/>
        <TextField type="password" label="Password" variant='standard'/><br/><br/><br/>
        <TextField label="Number" variant='standard'/><br/><br/><br/>
        <TextField label="Address" variant='standard'/><br/><br/><br/>
        <Button variant='contained' color='success'>Register</Button>



    </div>
  )
}

export default Registration