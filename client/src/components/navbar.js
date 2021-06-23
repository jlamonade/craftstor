import React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'

const Navbar = () => {
  return (
    <Grid> 
      <Link to='/'>Home</Link>
      <Link to='/signup'>Sign Up</Link>
      <Link to='/login'>Login</Link>
    </Grid>
  )
}

export default Navbar