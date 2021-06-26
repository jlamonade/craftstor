import React from "react";

// components
import Dashboard from "./Dashboard";
import Auth from "../utils/auth";

// material ui components
import {
  Button,
  Container,
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
                        color="primary"
                        href="/signup"
                      >
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

      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          {/* Footer */}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          © JPWDH Inc
        </Typography>
      </footer>
      {/* End footer */}
    </Container>
  );
};

export default Home;
