// dependencies
import React from 'react';
// import { useQuery, useMutation } from '@apollo/client';
// import queries
// import { GET_PROFILE } from '../utils/queries'

import SkillsForm from './SkillsForm'

// import { Container, List, ListItem, CssBaseline, Typography } from '@material-ui/core';
import { Container, CssBaseline, Typography, Grid, Button } from '@material-ui/core';

// component
const Profile = () => {
  // const { loading, data } = useQuery(GET_PROFILE)
  // const [ addSkill ] = useMutation(ADD_SKILL)
  const data = { "username": "hk"};
  const profile = { "profile": "github-source"};

  // const skillsData = data?.getSkills || []
  const skillsData = ["Express", "Node.js", "MERN"].join(" ");

  return (
    <Container maxWidth="sm">

      <CssBaseline />

      <Typography component="h3" variant="h4" align="center" color="textPrimary" gutterBottom>
            {data.username}'s Profile
      </Typography>

     
       <Typography component="h5" variant="h5" align="center" color="textSecondary" paragraph>
              <div style={{ fontSize: '12px' }} >Profile:</div>{profile.profile}
      </Typography>

      {/* <input accept="image/*" className={classes.input} id="icon-button-file" type="file" /> */}

    

      <Typography variant="h5" align="center" color="textSecondary" paragraph>
          <div style={{ fontSize: '12px' }}>Skills:</div><div> {skillsData}</div>
      </Typography> 

   
          <Grid container spacing={2} justify="center">
                  <Grid item>
                      <Button variant="contained" color="primary"  href="/profile">
                          Confirm 
                      </Button>
                   </Grid>   
                   <Grid item>
                          <Button variant="outlined" color="primary" href="/">
                              Cancel
                          </Button>
                   </Grid>
           </Grid>

     <SkillsForm />

      {/* <List>
        {skillsData.lenght > 0 ? (
          skillsData.map(skill => {
            <ListItem>{skill}</ListItem>
          })
        ) : (
          <ListItem>No Skills Yet</ListItem>
        )}
      </List> */}
    </Container>
  )
} 
  // useQuery to get skills
    // if no skills return empty array
  // use mutation to add skill
    // need to have a form input for skill

export default Profile
