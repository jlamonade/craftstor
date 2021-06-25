import React, { useState } from 'react'
// TODO import useMutation
import { useMutation } from '@apollo/client'
import { LOGIN } from '../utils/mutations'
import Auth from '../utils/auth'

import { makeStyles} from '@material-ui/core/styles';
import { CssBaseline, Container, FormControl, InputLabel, Button,  Input, FormGroup, Typography } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  button_margin: {
    margin: theme.spacing(5, 16, 2),
    maxWidth: '90%',
    align: "center"
  },
}));

const LoginForm = () => {
  const classes = useStyles();

  const [userFormData, setUserFormData] = useState({
    email: '',
    password: ''
  })

  const [login] = useMutation(LOGIN)

  // tracks the changes in the form
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUserFormData({ ...userFormData, [name]: value })
  }

  // form submit handler - where all the authentication stuff happens
  const handleFormSubmit = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    console.log(userFormData)

    try {
      const { data } = await login({
        variables: { ...userFormData }
      })
      console.log(data)
      // TODO if data is good then Auth login, also need to create auth utility
      Auth.login(data.login.token)
    } catch (err) {
      console.log(err)
    }

    setUserFormData({
      email: '',
      password: ''
    })
  }

  return (
    <Container maxWidth="sm">
       <CssBaseline />

     <Typography component="h5" variant="h5" align="center" color="textPrimary" gutterBottom>
            Sign In
     </Typography>


      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input id='email' value={userFormData.email} onChange={handleInputChange} name='email'/>

        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input id='password' value={userFormData.passowrd} type="password" onChange={handleInputChange} name='password'/>
        </FormControl>
        {/* <Button onClick={handleFormSubmit}>Submit</Button> */}

        <Button variant="contained" color="primary" className={classes.button_margin} onClick={handleFormSubmit}>
             Submit
        </Button>


      </FormGroup>
    </Container>
  )
}

export default LoginForm