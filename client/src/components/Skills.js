// dependencies
import React from 'react'
import { Container, List, ListItem, CssBaseline, Typography } from '@material-ui/core'

import { useUserContext } from '../utils/UserContext'
import Auth from '../utils/auth'

// component
const Skills = () => {

  const [state] = useUserContext()

  return (
    <Container maxWidth="sm">

      <CssBaseline />

      <Typography component="h5" variant="h5" align="center" color="textPrimary" gutterBottom>
            Skills
      </Typography>

      <List>
        {state.profile.skills.length > 0 ? (
          state.profile.skills.map(skill => {
            return (
            <ListItem>{skill}</ListItem>
            )
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
