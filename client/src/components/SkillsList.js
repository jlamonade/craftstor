import { useMutation } from "@apollo/client";
import { Grid, Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { linkStyle } from "../components/LinkStyle";
import { useUserContext } from "../utils/UserContext";
import { REMOVE_SKILL } from '../utils/actions'
import { DELETE_SKILL } from '../utils/mutations'

const SkillsList = ({ isDashboard, user }) => {
  const [, dispatch] = useUserContext();

  const [deleteSkill] = useMutation(DELETE_SKILL);

  const skillRemoveHandler = async (e) => {
    e.stopPropagation()
    const skill = e.target.id;
    try {
      const { data } = await deleteSkill({
      variables: {
        skill: skill
      }
    });
    if (await data) {
      dispatch({
        type: REMOVE_SKILL,
        payload: skill,
      });
    }} catch (err) {
      console.log(err)
    }
  };

  return (
    <Box m={2}>
      <Grid container spacing={1} justify="center">
        {user.profile.skills.map((skill) => {
          return (
            <Grid item key={skill}>
              <Button variant="contained" color="secondary">
                <Link to={`/search?q=${skill}`} style={linkStyle}>
                  {skill}
                </Link>
              </Button>
              {isDashboard && (<Button color="default">
                <div id={skill} onClick={skillRemoveHandler}>
                  X
                </div>
              </Button>)}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default SkillsList;
