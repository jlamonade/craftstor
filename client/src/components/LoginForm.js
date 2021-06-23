import React, { useState } from 'react'
// TODO import useMutation
import { Container, FormControl, Button, InputLabel, Input, FormGroup } from '@material-ui/core'

const SignupForm = () => {
  const [userFormData, setUserFormData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUserFormData({ ...userFormData, [name]: value })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    console.log(userFormData)

    // set up mutation here to send form data into the back to login

    setUserFormData({
      email: '',
      password: ''
    })
  }

  return (
    <Container>
      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input id='email' onChange={handleInputChange} name='email'/>

        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input id='password' onChange={handleInputChange} name='password'/>
        </FormControl>
        <Button onClick={handleFormSubmit}>Submit</Button>
      </FormGroup>
    </Container>
  )
}



export default SignupForm