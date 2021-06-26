import { Typography } from "@material-ui/core";

const UserInfo = ({ state }) => {
  return (
    <>
      <Typography
        component="h3"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
        marginTop="0"
      >
        {state.username}
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
    </>
  );
};

export default UserInfo;
