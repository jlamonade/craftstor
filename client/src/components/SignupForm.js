import React, { useState } from 'react'
// TODO import useMutation
import { Container, FormControl, Button, InputLabel, Input, FormGroup } from '@material-ui/core'
import { useMutation } from '@apollo/client'
import { SIGNUP } from '../utils/mutations'

// TODO add first name and last name fields to form and state
const SignupForm = () => {
  const [userFormData, setUserFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [createUser] = useMutation(SIGNUP)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUserFormData({ ...userFormData, [name]: value })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    console.log(userFormData)

    // set up mutation here to send form data into the back
    try {
      const { data } = await createUser({
        variables: { ...userFormData }
      })
      console.log(data)
    } catch (err) {
      console.log(err)
    }

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