// dependencies
import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/client'
// import queries
import { GET_SKILLS } from '../utils/queries'
// import mutations
import { ADD_SKILL } from '../utils/mutations'
import { Container, FormControl, Button, InputLabel, Input } from '@material-ui/core'


// component
const Skills = () => {
  const [ skillsData, setSkillsData ] = useState([])
  const { loading, data } = useQuery(GET_SKILLS)
  const [ addSkill ] = useMutation(ADD_SKILL)

  useEffect(
    () => {
      setSkillsData(data)
    }
  )

  return (
    <Container>

    </Container>
  )
} 
  // useQuery to get skills
    // if no skills return empty array
  // use mutation to add skill
    // need to have a form input for skill


export default Skills