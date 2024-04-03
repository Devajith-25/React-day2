import {  Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UseE = () => {
    var [name,setName] = useState()
    const changeHname = ()=>{
        setName("Home")
    }
    const changeGname = ()=>{
        setName("Gallery")
    }
    const changeAname = ()=>{
        setName("About")
    }
    useEffect(()=>{
        changeAname()
    },[])




  return (
    <div>
        <Typography>Welcome {name}</Typography>
        <Button variant='contained' color='error' onClick={changeHname}>Home</Button>
        <Button variant='contained' color='success' onClick={changeGname}>Gallery</Button>
        <Button variant='contained' color='warning' onClick={changeAname}>About</Button>
    </div>
  )
}

export default UseE