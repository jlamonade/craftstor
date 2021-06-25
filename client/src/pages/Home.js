import React from 'react'
import { Container } from '@material-ui/core'
import Dashboard from './Dashboard'
import Auth from '../utils/auth'

// added
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import Link from '@material-ui/core/Link';
// >>> added

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (

    <Container>
      {Auth.loggedIn() ? (
        <Dashboard />
      ) : (

        <>
        <CssBaseline />
        <main>
        <div className={classes.heroContent}>
        <Container maxWidth="sm">
            <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
                 CraftStor
            </Typography>
            <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary" href="/signup">
                        Sign Up
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary" href="/login">
                        Sign In
                    </Button>
                  </Grid>
                </Grid>
             </div>
           </Container>
        </div>
        </main>
        </>
      )}
    </Container>
  )
}

export default Home
