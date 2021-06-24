import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
// TODO change this
import { SAVE_PROJECT } from '../utils/mutations'
import { Container, FormControl, Button, InputLabel, Input, FormGroup, Checkbox, FormLabel } from '@material-ui/core'

const ProjectForm = () => {
  const [projectFormData, setProjectFormData] = useState({
    dueDate: '',
    client: '',
    checked: false
  })

  const [saveProject] = useMutation(SAVE_PROJECT)

  // tracks the changes in the form
  const handleInputChange = (event) => {
    const { name, value, checked } = event.target
    setProjectFormData({ ...projectFormData, [name]: value || checked })
  }

  // form submit handler - where all the authentication stuff happens
  const handleFormSubmit = async (event) => {
    event.preventDefault()
    event.stopPropagation()

    try {
      console.log(projectFormData)
      const { data } = await saveProject({
        variables: { ...projectFormData }
      })
      console.log(data)
    } catch (err) {
      console.log(err)
    }

    // setProjectFormData({
    //   dueDate: '',
    //   client: '',
    //   checked: false
    // })
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
          <FormLabel htmlFor="checked">Completed</FormLabel>
          <Checkbox name="checked" onChange={handleInputChange}/>
        </FormControl>
        <Button onClick={handleFormSubmit}>Submit</Button>
      </FormGroup>
    </Container>
  )
}

export default ProjectForm