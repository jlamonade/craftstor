// dependencies
import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
// import queries
import { GET_PROFILE } from "../utils/queries";
// import { UPDATE_PROFILE } from "../utils/mutations"
import { useUserContext } from "../utils/UserContext";

import SkillsForm from "./SkillsForm";

import {
  Container,
  CssBaseline,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";

const ProfileForm = () => {
  const [state, dispatch] = useUserContext();
  // const [addSkill] = useMutation(UPDATE_PROFILE)

  const { profileFormData, setProfileFormData } = useState({});
  setProfileFormData(state)
  
  console.log(profileFormData)
  return (
    <>
    </>
  );
};
// useQuery to get skills
// if no skills return empty array
// use mutation to add skill
// need to have a form input for skill

export default ProfileForm;
