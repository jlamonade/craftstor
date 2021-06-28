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

const SkillsList = ({ isDashboard }) => {
  const [state, dispatch] = useUserContext();

  const [deleteSkill] = useMutation(DELETE_SKILL);
  console.log(isDashboard)

  const skillRemoveHandler = async (e) => {
    e.stopPropagation()
    const skill = e.target.id;
    console.log(skill)
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
              <Link to={`/search?q=${skill}`} style={linkStyle}>
                {skill}
              </Link>
            </Button>
            {isDashboard && (<Button variant="container" color="default">
              <div id={skill} onClick={skillRemoveHandler}>X</div>
            </Button>)}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SkillsList;
