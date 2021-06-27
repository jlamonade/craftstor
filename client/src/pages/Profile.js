import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_USER_BY_USERNAME } from '../utils/queries'
import { CssBaseline, Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import UserInfo from '../components/UserInfo'
import SkillsList from '../components/SkillsList'
import ProjectCard from '../components/ProjectCard'
import LinkButton from '../components/Button'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  client_format: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  icon_color:{
    //  backgroundColor:  "primary.main"
    color: '#fff',
    backgroundColor: "#5c6bc0",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Profile = () => {
  const classes = useStyles();

  // use query to get profile information using the params
  const { loading, data } = useQuery(GET_USER_BY_USERNAME, {
    variables: {
      username: useParams().username
    }
  })
  const userData = data?.getUserByUsername
  console.log(userData)
  
  // then render it in the return
  return (
    <React.Fragment>
      <Container>
        {loading ? (
          <Container>Loading...</Container>
        ) : (
          // state.username
          <>
            <CssBaseline />

            <main>
              <div className={classes.heroContent}>
                <Container maxWidth="sm">
                  <UserInfo state={userData} />
                  <SkillsList state={userData} />
                </Container>

                <Container className={classes.cardGrid} maxWidth="md">
                  {/* End hero unit */}
                  <Grid container spacing={4}>
                    {userData.savedProjects.map((card, index) => (
                      <Grid item key={index} xs={12} sm={6} md={4}>
                        <ProjectCard
                          card={card}
                          classes={classes}
                          state={userData}
                          index={index}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Container>
              </div>
            </main>
          </>
        )}
      </Container>
    </React.Fragment>
  )
}

export default Profile