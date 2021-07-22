import { Typography, Box } from "@material-ui/core";
import { Link } from 'react-router-dom'

const UserInfo = ({ state }) => {
  return (
    <Box m={2}>
      <Typography
        component="h3"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
        marginTop="0"
      >
        <Link to={`/user/${state.username}`}>{state.username}</Link>
      </Typography>
      <Typography align="center">
        {state.firstName} {state.lastName} /{" "}
        <a
          href={`mailto:${state.email}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          {" "}
          {state.email}
        </a>{" "}
        / {state.profile.portfolio}
      </Typography>
    </Box>
  );
};

export default UserInfo;
