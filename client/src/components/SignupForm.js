import React, { useState } from 'react'
import { Container, FormControl, Button, InputLabel, Input, FormGroup } from '@material-ui/core'
import { useMutation } from '@apollo/client'
import { SIGNUP } from '../utils/mutations'
import Auth from '../utils/auth'


const SignupForm = () => {
  const [userFormData, setUserFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
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

    // console.log(userFormData)

    // set up mutation here to send form data into the back
    try {
      const { data } = await createUser({
        variables: { ...userFormData }
      })
      if (data) {
        Auth.login(data.createUser.token)
      }
      console.log(data)
    } catch (err) {
      console.log()
    }

    // setUserFormData({
    //   username: '',
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   password: ''
    // })
  }

  return (
    <Container>
      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input id="username" onChange={handleInputChange} name='username' value={userFormData.username}/>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <Input id="firstName" onChange={handleInputChange} name='firstName' value={userFormData.firstName}/>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          <Input id="lastName" onChange={handleInputChange} name='lastName' value={userFormData.lastName}/>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input id='email' type="email" onChange={handleInputChange} name='email' value={userFormData.email}/>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input id='password' type="password" onChange={handleInputChange} name='password' value={userFormData.password}/>
        </FormControl>
        <Button onClick={handleFormSubmit}>Submit</Button>
      </FormGroup>
    </Container>
  )
}



export default SignupForm