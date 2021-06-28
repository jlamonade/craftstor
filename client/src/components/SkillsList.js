import { useMutation } from "@apollo/client";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { linkStyle } from "../components/LinkStyle";
import { useUserContext } from "../utils/UserContext";
// import remove skill action
import { REMOVE_SKILL } from '../utils/actions'
// import remove skill mutation
import { DELETE_SKILL } from '../utils/mutations'
import Auth from "../utils/auth";

const SkillsList = () => {
  const [state, dispatch] = useUserContext();

  const [deleteSkill] = useMutation(DELETE_SKILL);

  const skillRemoveHandler = async (e) => {
    e.stopPropagation()
    e.preventDefault()
    const skill = e.target.textContent;
    try {const { data } = await deleteSkill({
      variables: {
        skill: skill
      }
    });
    if (data) {
      dispatch({
        type: REMOVE_SKILL,
        payload: skill,
      });
    }} catch (err) {
      console.log(err)
    }
  };

  return (
    <Grid container spacing={1} justify="center">
      {state.profile.skills.map((skill) => {
        return (
          <Grid item>
            <Button variant="contained" color="secondary">
              <Link to={`/search?q=${skill}`} style={linkStyle} onClick={Auth.loggedIn() && skillRemoveHandler}>
                {skill}
              </Link>
            </Button>
            
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SkillsList;
