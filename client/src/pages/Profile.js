import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_USER_BY_USERNAME } from '../utils/queries'
import { Avatar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

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
        // userData.username
        <>
            <CssBaseline />
 
              <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                  <Container maxWidth="sm">
                    {/* <Typography component="h3" variant="h2" align="center" color="textPrimary" gutterBottom> */}
                    <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
                         {userData.username}
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        <div>{userData.firstName} {userData.lastName} / {userData.email}</div>
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        {userData.profile.skills.join(' ')}
                    </Typography>
                  </Container>
                </div>
                
                <Container className={classes.cardGrid} maxWidth="md">
                  {/* End hero unit */}
                  <Grid container spacing={4}>
                    {userData.savedProjects.map((project, index) => {
                      if (project.checked) {
                        return (
                          <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                          <CardMedia
                            className={classes.cardMedia}
                            // image="https://source.unsplash.com/random"
                            image={project.image}
                            title="Image title"
                          />
                          <CardContent className={classes.cardContent}>

                            <Typography gutterBottom variant="h5" component="h4" className={classes.client_format}>
                                <Avatar className={classes.icon_color}>{project.client.charAt(0)}</Avatar>{project.client}
                            </Typography>
                            <Typography>
                             due date: {project.dueDate}
                             </Typography><Typography>
                             status: {project.checked? "completed": "pending"}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            {/* <Button size="small" color="primary">
                              View
                            </Button> */}
                            <Button size="small" color="primary" value={project} href="/projects">
                              Edit
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                        )
                      }
                    })}
                  </Grid>
                </Container>
              </main>
        
        </>
      )}
    </Container>
    </React.Fragment>
  )
}

export default Profile