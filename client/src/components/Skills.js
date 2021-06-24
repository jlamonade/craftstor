// dependencies
import React from 'react'
import { useQuery, useMutation } from '@apollo/client'
// import queries
import { GET_SKILLS } from '../utils/queries'
// import mutations
// import { ADD_SKILL } from '../utils/mutations'
import { Container, List, ListItem } from '@material-ui/core'
import SkillsForm from './SkillsForm'


// component
const Skills = () => {
  const { loading, data } = useQuery(GET_SKILLS)
  // const [ addSkill ] = useMutation(ADD_SKILL)
  const skillsData = data?.getSkills || []

  return (
    <Container>
      <SkillsForm />
      <List>
        {skillsData.lenght > 0 ? (
          skillsData.map(skill => {
            <ListItem>{skill}</ListItem>
          })
        ) : (
          <ListItem>No Skills Yet</ListItem>
        )}
      </List>
    </Container>
  )
} 
  // useQuery to get skills
    // if no skills return empty array
  // use mutation to add skill
    // need to have a form input for skill


export default Skills