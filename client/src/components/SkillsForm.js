// dependencies
import React, { useState } from 'react'
import { FormControl, Button, InputLabel, Input, FormGroup } from '@material-ui/core'
// form input

// onchange
// submit handler

const SkillsForm = () => { // component
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
    <FormGroup>
      <FormControl>
        <InputLabel htmlFor="skill">Skill</InputLabel>
        <Input id="skill" name="skill" value={skillsFormData.skill} onChange={handleInputChange}/>
      </FormControl>
      <Button onClick={handleFormSubmit}>Add</Button>
    </FormGroup>
  )
}

export default SkillsForm