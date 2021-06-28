// dependencies
import React, { useState } from "react";
import {
  FormControl,
  IconButton,
  InputLabel,
  Input,
  FormGroup,
  Grid,
} from "@material-ui/core";

import { useMutation } from "@apollo/client";

import { ADD_SKILL_ACTION } from "../utils/actions";

import { makeStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import { ADD_SKILL } from "../utils/mutations";

// form input

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(6, 3, 0),

    maxWidth: "90%",
    align: "center",
  },
}));

// onchange
// submit handler

const SkillsForm = ({ dispatch }) => {
  // component
  const classes = useStyles();
  // state
  const [ skillsFormData, setSkillsFormData ] = useState({
    skill: '',
  })
  const [addSkill] = useMutation(ADD_SKILL)

  // onchange
  const handleInputChange = (e) => {
    const { value } = e.target;
    setSkillsFormData({
      ...skillsFormData,
      skill: value,
    });
  };

  // submit handler
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addSkill({
        variables: { ...skillsFormData },
      });
      if (data) {
        dispatch({
          type: ADD_SKILL_ACTION,
          payload: skillsFormData.skill,
        });
      }
    } catch (err) {
      console.log(err);
    }

    setSkillsFormData({
      skill: ''
    })
  };

  return (
    <FormGroup className={classes.margin}>
      <Grid align="center">
        <FormControl>
          <InputLabel htmlFor="skill">Skill</InputLabel>
          <Input
            id="skill"
            name="skill"
            type="text"
            value={skillsFormData.skill}
            onChange={handleInputChange}
          />
        </FormControl>

        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="add"
            component="span"
            onClick={handleFormSubmit}
          >
            <AddCircleIcon fontSize="large" />
          </IconButton>
        </label>
      </Grid>
    </FormGroup>
  );
};

export default SkillsForm;  
