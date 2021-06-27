import { Grid, Button } from "@material-ui/core";
import { Link } from 'react-router-dom'
import { linkStyle } from '../components/LinkStyle'

const SkillsList = ({ state }) => {
  return (
    <Grid container spacing={1} justify="center">
      {state.profile.skills.map((skill) => {
        return (
          <Grid item>
            <Button variant="contained" color="secondary">
              <Link to={`/search?q=${skill}`} style={linkStyle}>{skill}</Link>
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SkillsList;
