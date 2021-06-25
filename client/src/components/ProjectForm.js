import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { SAVE_PROJECT } from '../utils/mutations'
import { Container, FormControl, InputLabel, Input, Button, FormGroup, Checkbox, FormControlLabel,  Typography} from '@material-ui/core'

import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button_margin: {
    margin: theme.spacing(5, 16, 2),
    maxWidth: '90%',
    align: "center"
  },
}));

const ProjectForm = () => {
  const classes = useStyles();

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

    setProjectFormData({
      dueDate: '',
      client: '',
      checked: null
    })
  }

  return (
    <Container maxWidth="sm">
     <Typography component="h5" variant="h5" align="center" color="textPrimary" gutterBottom>
           Project
     </Typography>

      <FormGroup>
         <FormControl>
          {/* <InputLabel htmlFor="dueDate">Due Date</InputLabel> */}
          <InputLabel  htmlFor="dueDate" shrink>Due Date</InputLabel>
          <Input type="date" id='dueDate' value={projectFormData.dueDate} onChange={handleInputChange} name='dueDate'/>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="client">Client</InputLabel>
          <Input id='client' type="text" value={projectFormData.client} onChange={handleInputChange} name='client'/>
        </FormControl>
        <FormControl >
          <FormControlLabel label="Completed" labelPlacement="top" htmlFor="checked" control={<Checkbox onChange={handleInputChange} name="checked" />}/>
          {/* <Checkbox name="checked" onChange={handleInputChange} /> */}
        </FormControl>
        {/* <Button onClick={handleFormSubmit}>Submit</Button> */}



        <Button variant="contained" color="primary" className={classes.button_margin} onClick={handleFormSubmit}>
             Submit
        </Button>


      </FormGroup>
    </Container>
  )
}

export default ProjectForm
