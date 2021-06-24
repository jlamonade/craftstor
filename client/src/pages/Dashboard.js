import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_USER_BY_ID } from '../utils/queries'
import { Container } from '@material-ui/core'
 
// added
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import Link from '@material-ui/core/Link';
// >>> added

// added
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3 ];
// >>> added


const Dashboard = () => {
  //added
  const classes = useStyles();
  //>>>> added

  const { loading, data } = useQuery(GET_USER_BY_ID);
  const userData = data?.getUserById  || [];

  console.log(userData.savedProjects)

  return (
    <React.Fragment>
    <Container>
      Dashboard
      {loading ? (
        <div>Loading...</div>
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
                    <div className={classes.heroButtons}>
                      <Grid container spacing={2} justify="center">
                        <Grid item>
                          <Button variant="contained" color="primary">
                            Main call to action
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button variant="outlined" color="primary">
                            Secondary action
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                  </Container>
                </div>
                
                <Container className={classes.cardGrid} maxWidth="md">
                  {/* End hero unit */}
                  <Grid container spacing={4}>
                    {cards.map((card) => (
                      <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                          <CardMedia
                            className={classes.cardMedia}
                            image="https://source.unsplash.com/random"
                            title="Image title"
                          />
                          <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                              Project name
                            </Typography>
                            <Typography>
                              description
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button size="small" color="primary">
                              View
                            </Button>
                            <Button size="small" color="primary">
                              Edit
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Container>
              </main>
              {/* Footer */}
              <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                  Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                  Something here to give the footer a purpose!
                </Typography>
              </footer>
              {/* End footer */}
        
        </>
      )}

      




    </Container>
    </React.Fragment>
  )
}

export default Dashboard