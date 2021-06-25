// dependencies
import React, { useState } from 'react'
import { FormControl, Button, InputLabel, Input, FormGroup } from '@material-ui/core'

const SkillsForm = () => { // component
  // state
  const [ skillsFormData, setSkillsFormData ] = useState({
    skill: '',
  })

  // onchange
  const handleInputChange = (e) => {
    const { value } = e.target
    setSkillsFormData({
      ...skillsFormData,
      skill: value
    })
  }

  // submit handler
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