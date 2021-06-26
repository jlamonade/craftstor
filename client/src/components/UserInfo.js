import { Typography } from "@material-ui/core";

const UserInfo = ({ state }) => {
  return (
    <Typography align="center">
      {state.firstName} {state.lastName} /{" "}
      <a
        href="mailto:name@email.com"
        style={{ textDecoration: "none", color: "black" }}
      >
        {" "}
        {state.email}
      </a>{" "}
      / {state.profile.portfolio}
    </Typography>
  );
};

export default UserInfo;
