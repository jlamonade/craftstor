import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { SAVE_PROJECT } from '../utils/mutations'
import { Container, FormControl, Grid, InputLabel, Input, Button, FormGroup, Checkbox, FormControlLabel,  Typography} from '@material-ui/core'

const ProjectForm = () => {
  // const classes = useStyles();

  const [projectFormData, setProjectFormData] = useState({
    title: '',
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
      if (data) {
        console.log(">>>>> ProjectForm");
        console.log(data);
        window.location.assign('/')
      }
    } catch (err) {
      console.log(err)
    }

    setProjectFormData({
      title: '',
      dueDate: '',
      client: '',
      checked: false
    })
  }

  return (
    <Container maxWidth="sm">
     <Typography component="h5" variant="h5" align="center" color="textPrimary" gutterBottom>
           Project
     </Typography>

      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="title" shrink>Project Title</InputLabel>
          <Input type="text" id='title' value={projectFormData.title} onChange={handleInputChange} name='title'/>
        </FormControl>
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
          <FormControlLabel checked={projectFormData.checked} label="Completed" labelPlacement="top" htmlFor="checked" control={<Checkbox onChange={handleInputChange} name="checked" />}/>
        </FormControl>


{/* 
        <Button variant="contained" color="primary" className={classes.button_margin} onClick={handleFormSubmit}>
             Submit
        </Button> */}

        <Grid container spacing={2} justify="center">
                  <Grid item>
                      <Button variant="contained" color="primary"  onClick={handleFormSubmit}>
                          Add Project
                      </Button>
                   </Grid>   
                   <Grid item>
                          <Button variant="outlined" color="primary" href="/">
                              Cancel
                          </Button>
                   </Grid>
          </Grid>



      </FormGroup>
    </Container>
  )
}

export default ProjectForm
