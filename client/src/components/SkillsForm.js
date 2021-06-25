// dependencies
import React, { useState } from 'react'
import { FormControl, IconButton, InputLabel, Input, FormGroup, Grid } from '@material-ui/core'

import { makeStyles} from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';

// form input

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(6, 5, 2),
   
    maxWidth: '90%',
    align: "center"
  },

}));

// onchange
// submit handler

const SkillsForm = () => { // component
  const classes = useStyles();
  // state
  const [ skillsFormData, setSkillsFormData ] = useState({
    skill: '',
  })

  const handleInputChange = (e) => {
    const { value } = e.target
    setSkillsFormData({
      ...skillsFormData,
      skill: value
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(skillsFormData)
  }

  return (
    <FormGroup className={classes.margin}>

    <Grid align="center">
        <FormControl>
          <InputLabel htmlFor="skill">Skill</InputLabel>
          <Input id="skill" name="skill" value={skillsFormData.skill} onChange={handleInputChange}/>
        </FormControl>
      {/* <Button onClick={handleFormSubmit}>Add</Button> */}

      
      {/* <Button variant="contained" color="primary" className={classes.button_margin} onClick={handleFormSubmit}>
             Add
        </Button> */}

          {/* <Button 
          variant="contained"
          color="primary"
          aria-label="add"
          startIcon={<AddCircleIcon />}
          onClick={handleFormSubmit}
          >
          Add
        </Button> */}

        <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="add" component="span" onClick={handleFormSubmit}>
          <AddCircleIcon fontSize="large"/>
        </IconButton>
      </label>



     </Grid>

    </FormGroup>
  )
}

export default SkillsForm