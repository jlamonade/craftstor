import React, { useState } from "react";
import {
  Container,
  FormControl,
  InputLabel,
  Input,
  FormGroup,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import { useMutation } from "@apollo/client";
import { SIGNUP } from "../utils/mutations";
import Auth from "../utils/auth";

import { makeStyles } from "@material-ui/core/styles";

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

const SignupForm = () => {
  const classes = useStyles();

  const [userFormData, setUserFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [createUser] = useMutation(SIGNUP);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // set up mutation here to send form data into the back
    try {
      const { data } = await createUser({
        variables: { ...userFormData },
      });
      Auth.login(data.createUser.token);
    } catch (err) {
      console.log();
    }

    setUserFormData({
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <Container maxWidth="sm">
      <Typography
        component="h5"
        variant="h5"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Sign Up
      </Typography>

      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input
            id="username"
            onChange={handleInputChange}
            name="username"
            value={userFormData.username}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <Input
            id="firstName"
            onChange={handleInputChange}
            name="firstName"
            value={userFormData.firstName}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          <Input
            id="lastName"
            onChange={handleInputChange}
            name="lastName"
            value={userFormData.lastName}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email"
            type="email"
            onChange={handleInputChange}
            name="email"
            value={userFormData.email}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            type="password"
            onChange={handleInputChange}
            name="password"
            value={userFormData.password}
          />
        </FormControl>
        {/* <Button color="primary" onClick={handleFormSubmit}>Submit</Button> */}

        <Typography component="h6" variant="h6" align="center" color="error" gutterBottom name="errorMessage" >
                {error ? "Please try again!":''}
        </Typography>



        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={handleFormSubmit}
              >
                submit
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

export default SignupForm;
