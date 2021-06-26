import { Typography } from "@material-ui/core";

const SkillsList = ({ state }) => {
  return (
    <Typography variant="h5" align="center" color="primary" paragraph>
      {state.profile.skills.join(" ")}
    </Typography>
  );
};

export default SkillsList;
