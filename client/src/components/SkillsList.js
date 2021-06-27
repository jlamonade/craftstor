import { Grid, Button } from "@material-ui/core";

const SkillsList = ({ state }) => {
  return (
    <Grid container spacing={1} justify="center">
      {state.profile.skills.map((skill) => {
        return (
          <Grid item>
            <Button variant="contained" color="secondary" m={1}>
              {skill}
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SkillsList;
