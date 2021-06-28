// dependencies
import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
// import queries
import { GET_USER_BY_ID } from "../utils/queries";
import { UPDATE_USER } from "../utils/mutations";
// import { useUserContext } from "../utils/UserContext";

import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  Input,
  Button,
  FormGroup,
  Typography,
} from "@material-ui/core";

const ProfileForm = () => {
  const { loading, data } = useQuery(GET_USER_BY_ID);

  const [profileFormData, setProfileFormData] = useState({});
  const [updateUser] = useMutation(UPDATE_USER);

  const userData = data?.getUserById;

  useEffect(() => {
    if (userData) {
      setProfileFormData(userData);
    }
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileFormData({ ...profileFormData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await updateUser({
        variables: {
          username: profileFormData.username,
          firstName: profileFormData.firstName,
          lastName: profileFormData.lastName,
          email: profileFormData.email,
        },
      });
      if (data) {
        window.location.assign("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {loading ? (
        <>Loading</>
      ) : (
        <Container maxWidth="sm">
          <Typography
            component="h5"
            variant="h5"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Update Profile
          </Typography>

          <FormGroup>
            <FormControl>
              <InputLabel htmlFor="username" shrink>
                Username
              </InputLabel>
              <Input
                type="text"
                id="username"
                value={profileFormData.username}
                onChange={handleInputChange}
                name="username"
              />
            </FormControl>
            <FormControl>
              {/* <InputLabel htmlFor="dueDate">Due Date</InputLabel> */}
              <InputLabel htmlFor="firstName" shrink>
                First Name
              </InputLabel>
              <Input
                type="text"
                id="firstName"
                value={profileFormData.firstName}
                onChange={handleInputChange}
                name="firstName"
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="lastName" shrink>
                Last Name
              </InputLabel>
              <Input
                id="lastName"
                type="text"
                value={profileFormData.lastName}
                onChange={handleInputChange}
                name="lastName"
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="email" shrink>
                Email
              </InputLabel>
              <Input
                id="email"
                type="email"
                value={profileFormData.email}
                onChange={handleInputChange}
                name="email"
              />
            </FormControl>
            {/* <FormControl>
          <InputLabel htmlFor="portfolio" shrink>Portfolio Link</InputLabel>
          <Input
            id="portfolio"
            type="text"
            value={profileFormData.profile.portfolio}
            onChange={handleInputChange}
            name="portfolio"
          />
        </FormControl> */}

            {/* 
        <Button variant="contained" color="primary" className={classes.button_margin} onClick={handleFormSubmit}>
             Submit
        </Button> */}

            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleFormSubmit}
                >
                  Update Profile
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  <Link to="/">Cancel</Link>
                </Button>
              </Grid>
            </Grid>
          </FormGroup>
        </Container>
      )}
    </>
  );
};
// useQuery to get skills
// if no skills return empty array
// use mutation to add skill
// need to have a form input for skill

export default ProfileForm;
