import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";


import { makeStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  Container,
  FormControl,
  InputLabel,
  Button,
  Input,
  FormGroup,
  Typography,
  Grid
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button_margin: {
    margin: theme.spacing(5, 16, 2),
    maxWidth: "90%",
    align: "center",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const LoginForm = () => {
  const classes = useStyles();

  const [userFormData, setUserFormData] = useState({
    email: '',
    password: '',
  })

  const [login] = useMutation(LOGIN);


  // tracks the changes in the form
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  // form submit handler - where all the authentication stuff happens
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    // console.log(userFormData)

     try {
      const { data } = await login({
        variables: { ...userFormData },
      });
      Auth.login(data.login.token);
    } catch (err) {
      alert(err.message)
    }

    setUserFormData({
      email: "",
      password: "",
    });
  };

  return (
    <Container maxWidth="sm">
      <CssBaseline />

      <Typography
        component="h5"
        variant="h5"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Sign In
      </Typography>

      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email"
            value={userFormData.email}
            onChange={handleInputChange}
            name="email"
            type="email"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            value={userFormData.password}
            type="password"
            onChange={handleInputChange}
            name="password"
          />
        </FormControl>

        <Typography component="h6" variant="h6" align="center" color="error" gutterBottom name="errorMessage" value="" errorText={"try again!"}>
         </Typography>

        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={handleFormSubmit}
              >
                Login
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary" href="/">
                  cancel
              </Button>
            </Grid>
          </Grid>
        </div>
      </FormGroup>



    </Container>
  );
};

export default LoginForm;
