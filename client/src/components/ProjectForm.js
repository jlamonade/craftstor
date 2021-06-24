import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
// TODO change this
import { LOGIN } from '../utils/mutations'
import { Container, FormControl, Button, InputLabel, Input, FormGroup, Checkbox } from '@material-ui/core'
import Auth from '../utils/auth'

const ProjectForm = () => {
  const [userFormData, setUserFormData] = useState({
    dueDate: '',
    client: '',
    checked: false
  })

  const [login] = useMutation(LOGIN)

  // tracks the changes in the form
  const handleInputChange = (event) => {
    const { name, value, checked } = event.target
    setUserFormData({ ...userFormData, [name]: value || checked })
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
      dueDate: '',
      client: '',
      completed: false
    })
  }

  return (
    <Container>
      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="dueDate">Due Date</InputLabel>
          <Input type="date" id='dueDate' onChange={handleInputChange} name='dueDate'/>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="client">Client</InputLabel>
          <Input id='client' type="text" onChange={handleInputChange} name='client'/>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="completed">Completed</InputLabel>
          <Checkbox name="checked" onChange={handleInputChange}/>
        </FormControl>
        <Button onClick={handleFormSubmit}>Submit</Button>
      </FormGroup>
    </Container>
  )
}

export default ProjectForm