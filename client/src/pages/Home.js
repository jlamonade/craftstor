
import React from 'react'
import { Container } from '@material-ui/core'
import Dashboard from './Dashboard'
import Footer from './Footer'
import Auth from '../utils/auth'
import Link from "react-router-dom"

// material ui components
import {
  Button,
  CssBaseline,
  Grid,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
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
                <Typography
                  component="h2"
                  variant="h2"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  CraftStor
                </Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={2} justify="center">
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary">
                          <Link to='/signup' className={classes.link2}>
                              Sign Up
                            </Link> 
                        
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary">
                        <Link to = '/login' className={classes.link2}>
                          Login
                        </Link>
                        
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </div>
          </main>
        </>
      )}

       <Footer/>
    </Container>
  );
};

export default Home;
