import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    // var name= "Devajith"
    var [name,setName]=useState("Devajith")

    var [value,setValue]=useState()
    const changeName =()=>{
        console.log("clicked")
        setName(value)
    }
    
    const inputHandler = (e)=>{
        console.log(e.target.value) 
        setValue(e.target.value)

    }
  return (
    <div>
        <Typography>Welcome {name}</Typography>
        
        <TextField label="Enter name" variant='outlined' onChange={inputHandler}/><br/>
        <Button variant='contained'color="error" onClick={changeName}>change</Button>



    </div>
  )
}

export default Statebasics