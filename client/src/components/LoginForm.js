import React, { useState } from 'react'
// TODO import useMutation
import { useMutation } from '@apollo/client'
import { LOGIN } from '../utils/mutations'
import { Container, FormControl, Button, InputLabel, Input, FormGroup } from '@material-ui/core'
import Auth from '../utils/auth'

const LoginForm = () => {
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
    <Container>
      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input id='email' value={userFormData.email} onChange={handleInputChange} name='email'/>

        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input id='password' value={userFormData.passowrd} type="password" onChange={handleInputChange} name='password'/>
        </FormControl>
        <Button onClick={handleFormSubmit}>Submit</Button>
      </FormGroup>
    </Container>
  )
}

export default LoginForm