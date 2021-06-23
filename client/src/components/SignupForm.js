import React, { useState } from 'react'
import { Container, FormControl, Button, InputLabel, Input, FormGroup } from '@material-ui/core'

const SignupForm = () => {
  const [userFormData, setUserFormData] = useState({
    username: '',
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
    setUserFormData({
      username: '',
      email: '',
      password: ''
    })
  }

  return (
    <Container>
      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input onChange={handleInputChange} name='username'/>
        </FormControl>

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