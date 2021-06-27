import React from "react";
import Auth from "../utils/auth";

import { Link } from "react-router-dom";

// components
import Dashboard from "./Dashboard";
import Footer from "./Footer";

// material ui components
import {
  Button,
  CssBaseline,
  Container,
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
                      <Button color="inherit">
                        <Link to="/signup" >
                          Sign Up
                        </Link>
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button color="inherit">
                        <Link to="/login" >
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

      <Footer />
    </Container>
  );
};

export default Home;
